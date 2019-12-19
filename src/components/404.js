import React, { Fragment } from 'react';
import * as NF from '../assets/styles/404';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
	return (
		<Fragment>
			<NF.NotFound>
				<NF.Not_found_404>Oopps! Error 404</NF.Not_found_404>
			</NF.NotFound>
			<NF.not_found_content>
				<NF.NotFound_title>Page not found</NF.NotFound_title>
				<NF.NotFound_text>
					We can't seem to find the page you're looking for. go to the home page to start over..
				</NF.NotFound_text>
				<NF.HomeButton>
					<Link to="/">Go Home</Link>
				</NF.HomeButton>
			</NF.not_found_content>
		</Fragment>
	);
};
