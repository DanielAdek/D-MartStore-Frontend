import React, { Fragment } from 'react';

import { ErrorPage } from '../components/404';
import TopNav from '../components/nav';
import { HeaderSection } from '../compounds/Header';
import { NavigationPanel } from '../components/nav-panel';
import { Footer } from '../components/footer';

export const Page404 = () => {
	return (
		<Fragment>
			<TopNav />
			<HeaderSection />
			<NavigationPanel />
			<ErrorPage />
			<Footer />
		</Fragment>
	);
};
