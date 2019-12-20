import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SweetAlert from 'sweetalert';
import TopNav from './nav';
import { HeaderSection } from '../compounds/Header';
import { NavigationPanel } from '../components/nav-panel';
import { Alias } from '../importer';
import * as Ch from '../assets/styles/checkout';
import { Footer } from './footer';
// import { KartsData } from '../../src/assets/Kart';

const { EllipsisLoadScreen } = Alias.pathToComponents('spiners');
const { retrieveUserData } = Alias.pathToActions('Authentication');
const { retreiveKartList } = Alias.pathToActions('WishAndKartCRUD');
const payOpts = [
	{
		id: 0,
		label: 'Direct bank Transfer',
		value: 'bt',
		desc:
			'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
	},
	{
		id: 1,
		label: 'Cash on delivery',
		value: 'cod',
		desc: 'Pay with cash upon delivery.',
	},
	{
		id: 2,
		label: 'Paypal',
		value: 'card',
		desc: 'Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.',
	},
	{
		id: 3,
		label: 'Cash Payment',
		value: 'cp',
		desc: 'Please send a check to Store Name, Store Street, Store Town, Store State County, Store Postcode.',
	},
];
const token = localStorage.getItem('x-auth-t');

const subTotal = prices =>
	prices && prices.reduce((accumulatedPrice, current) => (accumulatedPrice += current.cummulativePrice), 0);

export const Checkout = () => {
	// Redux Hooks
	const dispatch = useDispatch();
	const user = useSelector(state => state.Authenticate.user);
	const kartList = useSelector(state => state.WishAndKartCRUD.karts);
	const processing = useSelector(state => state.Loading.loading);

	// React Hooks
	const [selectedOption, setSelectedOption] = useState(null);
	const [recipient, setRecipient] = useState({});

	useEffect(() => {
		if (!user && token) {
			dispatch(retrieveUserData());
		}
		if (!kartList) {
			dispatch(retreiveKartList());
		}
	}, [dispatch, kartList, user]);

	const handleChange = e => {
		setRecipient({ ...recipient, [e.target.name]: e.target.value });
	};

	const handleUseMyDetail = event => {
		if (!token && event.target.value === 'true') {
			return SweetAlert('Login', "Sorry, we couldn't find your details!", 'info');
		}
		if (event.target.value === 'true') {
			return setRecipient({
				recipientDeliveryAdr: user.userAddress,
				recipientName: user.username,
				recipientPhoneNumber: user.phoneNumber,
				recipientEmail: user.email,
			});
		}
		setRecipient({
			recipientDeliveryAdr: '',
			recipientName: '',
			recipientPhoneNumber: '',
			recipientEmail: '',
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		const data = { ...recipient, productId: kartList && kartList.map(dat => ({ _id: dat._id })) };
		console.log(data);
	};

	const handlePaymentSelected = data => {
		setSelectedOption(data);
		setRecipient({ ...recipient, orderPaymentOption: data.value });
	};

	return (
		<Fragment>
			<TopNav />
			<HeaderSection />
			<NavigationPanel />
			{processing && <EllipsisLoadScreen />}
			<Ch.CheckoutContainer>
				<Ch.CheckoutHeader>Checkout</Ch.CheckoutHeader>
				<Ch.FillMyInformation>
					Use My Details?
					<Ch.RadioButton className="form-check form-check-inline">
						<Ch.RadioInput
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio1"
							value={true}
							onChange={handleUseMyDetail}
						/>
						<Ch.Radiolabel className="form-check-label" for="inlineRadio1">
							Yes
						</Ch.Radiolabel>
						<Ch.RadioInput
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio2"
							value={false}
							onChange={handleUseMyDetail}
						/>
						<Ch.Radiolabel className="form-check-label" for="inlineRadio1">
							No
						</Ch.Radiolabel>
					</Ch.RadioButton>
				</Ch.FillMyInformation>
				<Ch.BillingContainer>
					<Ch.BilingDetails>
						<Ch.EditProfileContainer>
							<Ch.EditProfileHeading>Billing Details</Ch.EditProfileHeading>
							<Ch.Form>
								<Ch.FormGrid className="form-row">
									<Ch.FormGroup className="form-group col-md-12">
										<Ch.FormInputLabel htmlFor="inputEmail4">
											Recipient Delivery Address
										</Ch.FormInputLabel>
										<Ch.FormInput
											type="text"
											name="recipientDeliveryAdr"
											className="form-control"
											id="inputEmail4"
											line={true}
											onChange={handleChange}
											value={recipient.recipientDeliveryAdr}
										/>
									</Ch.FormGroup>
									<Ch.FormGroup className="form-group col-md-6">
										<Ch.FormInputLabel htmlFor="inputEmail4">Recipient Name</Ch.FormInputLabel>
										<Ch.FormInput
											type="text"
											name="recipientName"
											className="form-control"
											id="inputEmail4"
											line={true}
											onChange={handleChange}
											value={recipient.recipientName}
										/>
									</Ch.FormGroup>

									<Ch.FormGroup className="form-group col-md-6">
										<Ch.FormInputLabel htmlFor="inputEmail4">Email Address</Ch.FormInputLabel>
										<Ch.FormInput
											type="email"
											className="form-control"
											name="recipientEmail"
											id="inputEmail4"
											line={true}
											onChange={handleChange}
											value={recipient.recipientEmail}
										/>
									</Ch.FormGroup>
									<Ch.FormGroup className="form-group col-md-6">
										<Ch.FormInputLabel htmlFor="inputEmail4">Phone Number</Ch.FormInputLabel>
										<Ch.FormInput
											type="text"
											className="form-control"
											name="recipientPhoneNumber"
											id="inputEmail4"
											line={true}
											onChange={handleChange}
											value={recipient.recipientPhoneNumber}
										/>
									</Ch.FormGroup>
								</Ch.FormGrid>

								<Ch.ShippingdetailsHeader>Shipping Details</Ch.ShippingdetailsHeader>
								<hr></hr>
								<Ch.FormGroup>
									<Ch.FormInputLabel htmlFor="inputEmail4" className="d-1">
										Order Note (Optional)
									</Ch.FormInputLabel>
									<Ch.FormTextArea
										name="recipientOrderNote"
										onChange={handleChange}
										className="form-group col-md-12"
										rows={3}
									></Ch.FormTextArea>
								</Ch.FormGroup>
							</Ch.Form>
						</Ch.EditProfileContainer>
					</Ch.BilingDetails>

					<Ch.Order>
						<Ch.OrderCardBody>
							<Ch.CheckoutHeader>Your Order</Ch.CheckoutHeader>
							<Ch.HeaderContainer>
								<Ch.TableHead>Product</Ch.TableHead>
								<Ch.TableHead>Total</Ch.TableHead>
							</Ch.HeaderContainer>
							<hr />
							<Ch.OrderTableContainer>
								{kartList &&
									kartList.map((data, i) => (
										<Ch.OrderedWrapper key={i}>
											<Ch.OrderProduct>
												<Ch.OrderedItemImg
													src={data.productId.productImages[data.imageType - 1].image}
												/>
												<Ch.OrderProductName>
													{data.quantity === 1
														? data.productId.productName
														: `${data.productId.productName} (${data.quantity}-Items)`}
												</Ch.OrderProductName>
											</Ch.OrderProduct>
											<Ch.orderTotal>${data.cummulativePrice}</Ch.orderTotal>
										</Ch.OrderedWrapper>
									))}
							</Ch.OrderTableContainer>

							<Ch.OrderTableContainer>
								<Ch.HeaderContainer className="mb-3">
									<Ch.TableHead>Subtotal</Ch.TableHead>
									<Ch.orderTotal>${subTotal(kartList)}</Ch.orderTotal>
								</Ch.HeaderContainer>
								<Ch.HeaderContainer className="mb-3">
									<Ch.TableHead>Shipping</Ch.TableHead>
									<Ch.orderTotal>$0.00</Ch.orderTotal>
								</Ch.HeaderContainer>
								<Ch.HeaderContainer className="mb-3">
									<Ch.TableHead>Tax</Ch.TableHead>
									<Ch.orderTotal>$5.00</Ch.orderTotal>
								</Ch.HeaderContainer>
								<Ch.HeaderContainer>
									<Ch.OrderedTotal>Total</Ch.OrderedTotal>
									<Ch.OrderedTotal>
										${subTotal(kartList) ? subTotal(kartList) - 5 : '0.00'}
									</Ch.OrderedTotal>
								</Ch.HeaderContainer>
							</Ch.OrderTableContainer>

							<Ch.PaymentContainer className="custom-radio">
								{payOpts.map((data, index) => (
									<Fragment key={index}>
										<Ch.PaymentLabals>
											<Ch.Radio
												type="radio"
												name="orderPaymentOption"
												onClick={() => handlePaymentSelected(data, index)}
											/>
											<Ch.Span>{data.label}</Ch.Span>
										</Ch.PaymentLabals>
										<Ch.PaymentMethodInfo show={selectedOption && index === selectedOption.id}>
											{data.desc}
										</Ch.PaymentMethodInfo>
									</Fragment>
								))}
							</Ch.PaymentContainer>
							<Ch.OrderButton type="button" onClick={handleSubmit}>
								Place Order
							</Ch.OrderButton>
						</Ch.OrderCardBody>
					</Ch.Order>
				</Ch.BillingContainer>
			</Ch.CheckoutContainer>
			<hr style={{ marginBottom: '60px;' }} />
			<div>
				<Footer />
			</div>
		</Fragment>
	);
};
