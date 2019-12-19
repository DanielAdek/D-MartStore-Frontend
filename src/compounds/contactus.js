import React, { Fragment } from 'react';

import TopNav from '../components/nav';
import { MyMapComponent } from '../components/contact-us';
import { HeaderSection } from '../compounds/Header';
import { NavigationPanel } from '../components/nav-panel';
import { Footer } from '../components/footer';
import { ContactUsForm } from '../components/contactUsform';

const ContactUs = () => {
	return (
		<Fragment>
			<TopNav />
			<HeaderSection />
			<NavigationPanel />
			<MyMapComponent
				isMarkerShown
				googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
			<ContactUsForm />
			<Footer />
		</Fragment>
	);
};

export default ContactUs;
