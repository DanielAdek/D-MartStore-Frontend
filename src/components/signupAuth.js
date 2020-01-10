import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Alias } from '../importer';
import * as SA from '../assets/styles/signupAuth';
import Logo from './logo';
import { Link } from 'react-router-dom';

const { handleOnBoard } = Alias.pathToActions('Authentication');
const { RingLoad } = Alias.pathToComponents('spiners');

export const SignupAuthentication = () => {
	// Redux Hooks
	const dispatch = useDispatch();
	const history = useHistory();
	const processing = useSelector(state => state.Loading.loading);

	const [authSignup, setAuthSignUp] = useState({});

	const handleChange = e =>
			setAuthSignUp({ ...authSignup, [e.target.name]: e.target.value });

	const handleSubmit = () => 
			dispatch(handleOnBoard(authSignup, history));

	return (
			<SA.signupContainer>
				<SA.SignupLeft />
					<SA.Signupright>
						<SA.SiteLogo>
							<Link to="/">
								<Logo />
							</Link>
						</SA.SiteLogo>
					<SA.SignupwelcomeText>Welcome to DMS</SA.SignupwelcomeText>
					<SA.SignupHeadText pos="center">
					Already have an account? <Link to="/login">Sign In </Link>
				</SA.SignupHeadText>
				<SA.Form>
					<SA.formRow className="form-row">
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="text"
								name="username"
								placeholder="username"
								className="form-control"
								onChange={handleChange}
							/>
						</SA.formGroup>

						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="number"
								name="phoneNumber"
								placeholder="Phone Number"
								className="form-control"
								onChange={handleChange}
							/>
						</SA.formGroup>

						{/* <SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="text"
								name="deliveryAddress"
								placeholder="Full Address"
								className="form-control"
								onChange={handleChange}
							/>
						</SA.formGroup> */}

						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="email"
								name="email"
								placeholder="Email"
								className="form-control"
								onChange={handleChange}
							/>
						</SA.formGroup>

						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="password"
								name="password"
								placeholder="Password"
								className="form-control"
								onChange={handleChange}
							/>
						</SA.formGroup>
						<SA.formGroup className="form-group col-lg-12">
							<SA.FormInput
								type="text"
								name="userAddress"
								placeholder="Full Address"
								className="form-control"
								onChange={handleChange}
							/>
						</SA.formGroup>
					</SA.formRow>
					<SA.SignupBotton type="button" onClick={handleSubmit}>
						{processing ? <RingLoad /> : 'Sign Up'}
					</SA.SignupBotton>
				<SA.SignupHeadText pos="left" color="blue" arr="pointer">
					<Link to="/">View the latest trending shopables</Link>
				</SA.SignupHeadText>
				</SA.Form>
			</SA.Signupright>
		</SA.signupContainer>
	);
};
