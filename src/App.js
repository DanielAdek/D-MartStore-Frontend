import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ShopPage } from './pages/Shop';
import { Landing } from './pages/Landing';
import { WishListPage } from './pages/WishList';
import { KartPage } from './pages/Kart';
import { Dashboard } from './pages/MyAccount';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/wishlist" component={WishListPage} />
            <Route path="/kart" component={KartPage} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </Router>
  )
}

export default App;
