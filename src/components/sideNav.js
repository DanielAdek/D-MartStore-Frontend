import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import * as Nav from '../assets/styles/nav-p';
import { useHistory } from 'react-router-dom';

export const SideBarNav = props => {
	const [logout, setLogout] = useState(false);

	const history = useHistory();
	const signOut = e => {
		e.preventDefault();
		localStorage.clear('token');
		setLogout(true);
		history.push('/');
	};

	return (
		<Nav.SideBarContainer>
			<Nav.SideBarHeading>Navigation</Nav.SideBarHeading>
			<Nav.SideBarItems>
				<Nav.SideBarItem>
					<Nav.SideBarSpan onClick={() => props.clicked(1)}>Dashboard</Nav.SideBarSpan>
				</Nav.SideBarItem>
				<Nav.SideBarItem>
					<Nav.SideBarSpan onClick={() => props.clicked(2)}>Edit Profile</Nav.SideBarSpan>
				</Nav.SideBarItem>
				<Nav.SideBarItem>
					<Nav.SideBarSpan onClick={() => props.clicked(3)}>Create Product</Nav.SideBarSpan>
				</Nav.SideBarItem>
				<Nav.SideBarItem>
					<Nav.SideBarSpan onClick={() => props.clicked(4)}>Order History</Nav.SideBarSpan>
				</Nav.SideBarItem>
				<Nav.SideBarItem>{<Nav.SideBarSpan onClick={signOut}>Logout</Nav.SideBarSpan>}</Nav.SideBarItem>
			</Nav.SideBarItems>
		</Nav.SideBarContainer>
	);
};
