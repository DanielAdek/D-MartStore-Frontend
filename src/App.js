import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signup" component={SignupAuth} />
				<Route path="/login" component={LoginAuthentication} />
				<Route path="/about" component={AboutPage} />
				<Route path="/wishlist" component={WishListPage} />
				<Route path="/kart" component={KartPage} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/getoneproduct" component={GetOneProduct} />
				<Route pah="/karts/checkout" component={Checkout} />
			</Switch>
		</Router>
	);
}

export default App;
