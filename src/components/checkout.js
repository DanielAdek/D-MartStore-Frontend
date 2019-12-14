import React, { Fragment, useState } from 'react';
import TopNav from './nav';
import { HeaderSection } from '../compounds/Header';
import { NavigationPanel } from '../components/nav-panel';
import * as Ch from '../assets/styles/checkout';
import { Footer } from './footer';
import { KartsData } from '../../src/assets/Kart';

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
export const Checkout = () => {
	const [selectedOption, setSelectedOption] = useState(null);
	// const [toggleBgColor, setToggleBackgroundColor] = useState(false);
	const [recipient, setRecipient] = useState({});

	// const handleChangebgColor = () => {
	// 	setToggleBackgroundColor(!toggleBgColor);
	// };
	const handleChange = e => {
		setRecipient({ ...recipient, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
	};

	const handlePaymentSelected = (data, index) => {
		setSelectedOption(data);
	};

	return (
		<Fragment>
			<TopNav />
			<HeaderSection />
			<NavigationPanel />

			<Ch.CheckoutContainer>
				<Ch.CheckoutHeader>Checkout</Ch.CheckoutHeader>
				<Ch.FillMyInformation>
					fill my information
					<Ch.RadioButton className="form-check form-check-inline">
						<Ch.RadioInput
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio1"
							value="option1"
						/>
						<Ch.Radiolabel className="form-check-label" for="inlineRadio1">
							No
						</Ch.Radiolabel>
						<Ch.RadioInput
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio2"
							value="option2"
						/>
						<Ch.Radiolabel className="form-check-label" for="inlineRadio1">
							Yes
						</Ch.Radiolabel>
					</Ch.RadioButton>
				</Ch.FillMyInformation>
				<Ch.BillingContainer>
					<Ch.BilingDetails>
						<Ch.EditProfileContainer>
							<Ch.EditProfileHeading>Billing Details</Ch.EditProfileHeading>
							<Ch.Form>
								<Ch.FormGrid className="form-row">
									<Ch.FormGroup className="form-group col-md-6">
										<Ch.FormInputLabel htmlFor="inputEmail4">Recipient Name</Ch.FormInputLabel>
										<Ch.FormInput
											type="text"
											name="recipientName"
											class="form-control"
											id="inputEmail4"
											line={true}
											onChange={handleChange}
										/>
									</Ch.FormGroup>

									<Ch.FormGroup className="form-group col-md-6">
										<Ch.FormInputLabel htmlFor="inputEmail4">Email Address</Ch.FormInputLabel>
										<Ch.FormInput
											type="email"
											class="form-control"
											name="email"
											id="inputEmail4"
											line={true}
											onChange={handleChange}
										/>
									</Ch.FormGroup>
									<Ch.FormGroup className="form-group col-md-6">
										<Ch.FormInputLabel htmlFor="inputEmail4">Phone Number</Ch.FormInputLabel>
										<Ch.FormInput
											type="text"
											class="form-control"
											name="phone"
											id="inputEmail4"
											line={true}
											onChange={handleChange}
										/>
									</Ch.FormGroup>
									<Ch.FormGroup className="form-group col-md-6">
										<Ch.FormInputLabel htmlFor="inputEmail4">Order Note</Ch.FormInputLabel>
										<Ch.FormInput
											type="text"
											class="form-control"
											name="order"
											id="inputEmail4"
											line={true}
											onChange={handleChange}
										/>
									</Ch.FormGroup>
									<Ch.FormGroup className="form-group col-md-12">
										<Ch.FormInputLabel htmlFor="inputEmail4">
											Recipient Delivery Address
										</Ch.FormInputLabel>
										<Ch.FormInput type="text" class="form-control" id="inputEmail4" line={true} />
									</Ch.FormGroup>
								</Ch.FormGrid>

								<Ch.ShippingdetailsHeader>Shipping Details</Ch.ShippingdetailsHeader>
								<hr></hr>
								<Ch.FormGroup>
									<Ch.FormCheck>
										<Ch.CheckBox className="form-check-input" type="checkbox"></Ch.CheckBox>
										<Ch.CheckBoxLabel className="form-check-label" for="gridCheck">
											{' '}
											Ship to a different address?
										</Ch.CheckBoxLabel>
									</Ch.FormCheck>
								</Ch.FormGroup>
								<Ch.FormTextArea className="form-group col-md-12"></Ch.FormTextArea>
							</Ch.Form>
						</Ch.EditProfileContainer>
					</Ch.BilingDetails>

					<Ch.Order>
						<Ch.CheckoutHeader>Your Order</Ch.CheckoutHeader>
						<Ch.HeaderContainer>
							<Ch.TableHead>Product</Ch.TableHead>
							<Ch.TableHeadB>Total</Ch.TableHeadB>
						</Ch.HeaderContainer>
						<Ch.OrderTableContainer>
							{KartsData.map(data => (
								<Ch.OrderedWrapper>
									<Ch.OrderProduct>{data.productName}</Ch.OrderProduct>
									<Ch.orderTotal> $ {data.productPrice}</Ch.orderTotal>
								</Ch.OrderedWrapper>
							))}
						</Ch.OrderTableContainer>

						<Ch.OrderTableContainer>
							<Ch.SubTotal>
								<Ch.GridItem>Subtotal</Ch.GridItem>
								<Ch.GridItem Style={{ paddingLeft: '200px;' }}> $ 80</Ch.GridItem>
								<Ch.GridItem>Shipping</Ch.GridItem>
								<Ch.GridItem> $ 200</Ch.GridItem>
								<Ch.GridItem>Tax</Ch.GridItem>
								<Ch.GridItem> $ 0.00</Ch.GridItem>
								<Ch.OrderedTotal>Total</Ch.OrderedTotal>
								<Ch.OrderedTotal> $ 80.4</Ch.OrderedTotal>
							</Ch.SubTotal>
						</Ch.OrderTableContainer>

						<Ch.PaymentContainer className="custom-control custom-radio">
							{payOpts.map((data, index) => (
								<Fragment>
									<Ch.PaymentLabals>
										<Ch.Radio
											type="radio"
											name="paymentOption"
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

						<Ch.OrderButton
							// applyBackground={toggleBgColor}
							onClick={handleSubmit}
						>
							Place Order
						</Ch.OrderButton>
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
