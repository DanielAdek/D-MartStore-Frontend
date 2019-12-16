import React, { Fragment } from 'react';

import { Aboutus } from '../components/about';
import TopNav from '../components/nav';
import { HeaderSection } from '../compounds/Header';
import { NavigationPanel } from '../components/nav-panel';
import NavTabs from '../components/tab';
import { Footer } from '../components/footer';

export const About = () => {
	return (
		<Fragment>
			<TopNav />
			<HeaderSection />
			<NavigationPanel />
			<Aboutus />
			<Footer />
		</Fragment>
	);
};
