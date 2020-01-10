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

	const handleChange = e =>
			setAuthLogin({ ...authLogin, [e.target.name]: e.target.value });
	
	const handleSubmit = () =>
			dispatch(handleAuthenticate(authLogin, history));

	return (
		<SI.signupContainer>
			<SI.SignupLeft />
			<SI.Signupright>
				<SI.SignupRightContainer>
					<SI.SiteLogo>
						<Link to="/"><Logo /></Link>
					</SI.SiteLogo>
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
									className="form-control"
									onChange={handleChange}
								></SI.FormInput>
							</SI.formGroup>

							<SI.formGroup className="form-group col-md-12">
								<SI.FormInput
									type="password"
									name="password"
									placeholder="Password"
									className="form-control"
									onChange={handleChange}
								></SI.FormInput>
							</SI.formGroup>
						</SI.formRow>
						<SI.SignupBotton type="button" onClick={handleSubmit}>
							{processing ? <RingLoad /> : 'Sign In'}
						</SI.SignupBotton>
					</SI.Form>
					<SI.ForgetPassword>
						<Link to="/">View the latest trending shopables</Link>
					</SI.ForgetPassword>
				</SI.SignupRightContainer>
			</SI.Signupright>
		</SI.signupContainer>
	);
};
