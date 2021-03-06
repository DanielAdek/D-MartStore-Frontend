import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';
import '@brainhubeu/react-carousel/lib/style.css';
import { ShopPage } from './pages/Shop';
import { Landing } from './pages/Landing';
import { WishListPage } from './pages/WishList';
import { KartPage } from './pages/Kart';
import { GetOneProduct } from './pages/GetOneProduct';
import { Dashboard } from './pages/MyAccount';
import { Checkout } from './components/checkout';
import { SignupAuth } from './compounds/SignupAuth';
import { LoginAuthentication } from './components/signinAuth';
import { AboutPage } from './pages/AboutUs';
import { Erro404 } from './pages/404';
import { contactUsPage } from './pages/conatact-us';

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/error" exact component={Erro404} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signup" component={SignupAuth} />
					<Route path="/login" component={LoginAuthentication} />
					<Route path="/about" component={AboutPage} />
					<Route path="/wishlist" component={WishListPage} />
					<Route path="/kart" component={KartPage} />
					<Route path="/contact-us" component={contactUsPage} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/getoneproduct" component={GetOneProduct} />
					<Route pah="/karts/checkout" component={Checkout} />
				</Switch>
			</Router>
			<ScrollUpButton 
        StopPosition={0}
        ShowAtPosition={150}
        EasingType='easeOutCubic'
        AnimationDuration={500}
        style={{ background: 'coral', borderRadius: '9px', outline: 'none'}}
      />
		</Fragment>
	);
}

export default App;
