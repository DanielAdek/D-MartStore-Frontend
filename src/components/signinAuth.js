import React, { useState } from 'react';
import Logo from './logo';
import * as SI from '../assets/styles/login';
import { Link } from 'react-router-dom';

export const LoginAuthentication = () => {
	const [authLogin, setAuthLogin] = useState({});

	const handleChange = e => {
		setAuthLogin({ ...authLogin, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		console.log(authLogin);
		e.preventDefault();
	};
	return (
		<SI.signupContainer>
			<SI.SignupLeft>
				<SI.SiteLogo>
					<Link to="/">
						<Logo />
					</Link>
				</SI.SiteLogo>
			</SI.SignupLeft>

			<SI.Signupright>
				<SI.SignupRightContainer>
					<SI.Div>Welcome Back!</SI.Div>
					<SI.SignupHeadText>
						Don't have an account? <Link to="/signup">Sign Up </Link>
					</SI.SignupHeadText>
					<SI.Form>
						<SI.formRow className="form-row">
							<SI.formGroup className="form-group col-md-12">
								<SI.FormInput
									type="email"
									name="email"
									placeholder="Email"
									class="form-control"
									onChange={handleChange}
								></SI.FormInput>
							</SI.formGroup>

							<SI.formGroup className="form-group col-md-12">
								<SI.FormInput
									type="password"
									name="password"
									placeholder="Password"
									class="form-control"
									onChange={handleChange}
								></SI.FormInput>
							</SI.formGroup>
						</SI.formRow>
						<SI.SignupBotton type="button" onClick={handleSubmit}>
							Sign In
						</SI.SignupBotton>
					</SI.Form>

					<SI.ForgetPassword>
						{' '}
						<Link to="/forgetpassword">Forget Password</Link>
					</SI.ForgetPassword>
				</SI.SignupRightContainer>
			</SI.Signupright>
		</SI.signupContainer>
	);
};
