import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Alias } from '../importer';
import * as SI from '../assets/styles/login';
import Logo from './logo';

const { handleAuthenticate } = Alias.pathToActions('Authentication');
const { RingLoad } = Alias.pathToComponents('spiners');

export const LoginAuthentication = () => {
	// Redux Hooks
	const dispatch = useDispatch();
	const history = useHistory();
	const processing = useSelector(state => state.Loading.loading);

	// React Hooks
	const [authLogin, setAuthLogin] = useState({});

	const handleChange = e => {
		setAuthLogin({ ...authLogin, [e.target.name]: e.target.value });
	};
	
	const handleSubmit = e => {
		dispatch(handleAuthenticate(authLogin, history));
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
									type="text"
									name="dataField"
									placeholder="Email or Phone Number"
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
							{processing && <RingLoad />}
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