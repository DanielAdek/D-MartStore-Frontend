import React, { useState } from 'react';
import * as SA from '../assets/styles/signupAuth';
import Logo from './logo';
import { Link } from 'react-router-dom';

export const SignupAuthentication = () => {
	const [authSignup, setAuthSignUp] = useState({});

	const handleChange = e => {
		setAuthSignUp({ ...authSignup, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
	};
	return (
		<SA.signupContainer>
			<SA.SignupLeft>
				<SA.SiteLogo>
					<Link to="/">
						<Logo />
					</Link>
				</SA.SiteLogo>
			</SA.SignupLeft>
			<SA.Signupright>
				<SA.SignupHeadText>
					Already have an account? <Link to="/login">Signin </Link>
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
							></SA.FormInput>
						</SA.formGroup>

						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="number"
								name="phonenumber"
								placeholder="Phone Number"
								className="form-control"
								onChange={handleChange}
							></SA.FormInput>
						</SA.formGroup>

						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="text"
								name="name"
								placeholder="Full Name"
								className="form-control"
								onChange={handleChange}
							></SA.FormInput>
						</SA.formGroup>

						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="text"
								name="Adress"
								placeholder="Full Address"
								className="form-control"
								onChange={handleChange}
							></SA.FormInput>
						</SA.formGroup>

						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="email"
								name="email"
								placeholder="Email"
								class="form-control"
								onChange={handleChange}
							></SA.FormInput>
						</SA.formGroup>

						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								type="password"
								name="password"
								placeholder="Password"
								class="form-control"
								onChange={handleChange}
							></SA.FormInput>
						</SA.formGroup>
					</SA.formRow>
					<SA.SignupBotton type="button" onClick={handleSubmit}>
						Sign Up
					</SA.SignupBotton>
				</SA.Form>
			</SA.Signupright>
		</SA.signupContainer>
	);
};
