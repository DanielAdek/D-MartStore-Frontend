import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alias } from '../importer';
import * as RC from '../assets/styles/kart';
import { Karts } from '../components/kart';
import { Modal } from '../components/modal';

const { retreiveKartList, deleteKart } = Alias.pathToActions('WishAndKartCRUD');
const { DualRingLoadScreen } = Alias.pathToComponents('spiners');

const totalPrice = prices => prices && prices.reduce((accumulatedPrice, current) => ( accumulatedPrice += current.cummulativePrice), 0);

export const KartList = () => {
	// Redux Hooks
	const dispatch = useDispatch();
	const kartList = useSelector(state => state.WishAndKartCRUD.karts);
	const processing = useSelector(state => state.Loading.loading);

	const [currentData, setCurrentData] = useState(null);
	const [totalKart, setTotalKart] = useState(0.00);
	const [visible, setVisible] = useState(false);

	const hideModal = () => setVisible(false);

	const showModal = () => setVisible(true);

	// useEffect(() => {
	// 	if (!kartList) {
	// 		dispatch(retreiveKartList());
	// 	}
	// }, [dispatch, kartList]);

	useEffect(() => {
		setCurrentData(kartList && kartList.map(data => data));
		setTotalKart(totalPrice(kartList));
	}, [kartList]);

	const handleQtyAmout = (event, index) => {
		const data = currentData.slice();
		data.forEach((value, idx) => {
			if (idx === index) {
				const qty = event.target.textContent === '+'
						? (value.quantity += 1)
						: event.target.textContent === '-' && value.quantity >= 2
						? (value.quantity -= 1)
						: 1;
				setCurrentData([{ ...value, quantity: qty }]);
			}
			setCurrentData(data, () => {
				setTotalKart(totalPrice(data));
			});
		});
	};

	const handleDelKart = kartId => dispatch(deleteKart(kartId, retreiveKartList));

	return (
		<RC.KartWrapper>
			<RC.KartContainer>
				<RC.KartTopSection>
				{ processing && <DualRingLoadScreen />}
					<RC.KartPageTitle>Shopping Cart</RC.KartPageTitle>
					<RC.KartTopButtonSection>
						<RC.KartTopButtons
							onClick={showModal}
							title="Click to see more details"
							className="btn btn-md"
							bClr="#174a41"
							color="#fff"
							bgColor="#174a41"
						>
							Total ${totalKart || 0.00}
						</RC.KartTopButtons>
						<RC.KartTopButtons
							className="btn btn-sm"
							bClr="rgb(255, 211, 51)"
							color="rgb(61, 70, 77)"
							bgColor="rgb(255, 211, 51)"
							onClick
						>
							<Link to="/karts/checkout">Checkout</Link>
						</RC.KartTopButtons>
					</RC.KartTopButtonSection>
				</RC.KartTopSection>
				<RC.KartTable>
					<RC.KartTableRow>
						<RC.KartTableHeader>Image</RC.KartTableHeader>
						<RC.KartTableHeader>Product</RC.KartTableHeader>
						<RC.KartTableHeader>Price</RC.KartTableHeader>
						<RC.KartTableHeader>Quantity</RC.KartTableHeader>
						<RC.KartTableHeader>Total</RC.KartTableHeader>
						<RC.KartTableHeader>&nbsp;</RC.KartTableHeader>
					</RC.KartTableRow>
					{kartList && kartList.map((data, index) => (
						<Karts
							key={index}
							data={data}
							index={index}
							currentData={currentData}
							handleDelKart={() => handleDelKart(data._id)}
							handleQtyAmout={handleQtyAmout}
						/>
					))}
				</RC.KartTable>
				<Modal visible={visible} w="530px" h="450px" t="25%" l="30%">
					<RC.KartTableDataDelButton onClick={hideModal}>X</RC.KartTableDataDelButton>
				</Modal>
			</RC.KartContainer>
		</RC.KartWrapper>
	);
};
