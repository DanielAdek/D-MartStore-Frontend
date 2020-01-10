import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alias } from '../importer';

const { deleteKart, sendKartToCheckout } = Alias.pathToActions('WishAndKartCRUD');
const { DualRingLoadScreen } = Alias.pathToComponents('spiners');
const { Karts } = Alias.pathToComponents('kart');
const { Modal } = Alias.pathToComponents('modal');
const RC = Alias.pathToSyles('kart');


export const KartList = () => {
	// Redux Hooks
	const history = useHistory();
	const dispatch = useDispatch();
	const kartList = useSelector(state => state.WishAndKartCRUD.karts);
	const processing = useSelector(state => state.Loading.loading);

	const [currentData, setCurrentData] = useState(null);
	const [totalKart, setTotalKart] = useState(0.00);
	const [visible, setVisible] = useState(false);

	const totalPrice = prices => prices && prices.reduce((accumulatedPrice, current) => ( accumulatedPrice += current.cummulativePrice * current.quantity), 0);

	const hideModal = () => setVisible(false);

	const showModal = () => setVisible(true);

	const handleProceed = () => {
		hideModal();
		dispatch(sendKartToCheckout(currentData));
		history.push('/checkout');
  }

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
			setCurrentData(data);
			setTotalKart(totalPrice(data));
		});
	};

	const handleDelKart = kartId => dispatch(deleteKart(kartId));

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
							Check Total
						</RC.KartTopButtons>
						<RC.KartTopButtons
							className="btn btn-sm"
							bClr="rgb(255, 211, 51)"
							color="rgb(61, 70, 77)"
							bgColor="rgb(255, 211, 51)"
							onClick={handleProceed}
						>
							Checkout
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
				<Modal visible={visible} w="530px" h="500px" t="15%" l="33%">
					<RC.KartTableDataDelButton style={{position: 'absolute', right: '25px', top: '10px'}} onClick={hideModal}>X</RC.KartTableDataDelButton>
					<RC.KartTotalWrapper>
						<RC.KartTotalTitle>Cart Total</RC.KartTotalTitle>
						<RC.KartTotalFlex b={true}>
							<RC.KartText bold={true} sm={true}>Subtotal</RC.KartText>
							<RC.KartText bold={true} sm={true}>${totalKart}</RC.KartText>
						</RC.KartTotalFlex>
						<RC.KartTotalFlex>
							<RC.KartText bold={true} sm={true}>Shipping</RC.KartText>
							<RC.KartText sm={true}>$0.00</RC.KartText>
						</RC.KartTotalFlex>
						<RC.KartTotalFlex b={true}>
							<RC.KartText bold={true} sm={true}>Tax</RC.KartText>
							<RC.KartText sm={true}>$5.00</RC.KartText>
						</RC.KartTotalFlex>
						<RC.KartTotalFlex b={true}>
							<RC.KartText bold={true}>Total</RC.KartText>
							<RC.KartText bold={true}>${totalKart + 5}</RC.KartText>
						</RC.KartTotalFlex>
						<RC.KartCheckoutButton onClick={handleProceed}>Proceed to checkout</RC.KartCheckoutButton>
					</RC.KartTotalWrapper>
				</Modal>
			</RC.KartContainer>
		</RC.KartWrapper>
	);
};
