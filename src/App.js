import React from 'react';
import TopNav from './components/nav';
import { HeaderSection } from './compounds/Header';
import { NavigationPanel } from './components/nav-panel';
import { OfferSection, OfferSection2 } from './compounds/OfferSection';
import { DisplayProducts, DisplayProductHeading, DisplayFeaturedProducts } from './compounds/DisplayProducts';
import { Jumbotron } from './components/jumbotron';
import { Footer, FooterMinor } from './components/footer';

function App() {
  return (
    <div className="App">
        <TopNav />
        <HeaderSection />
        <NavigationPanel />
        <Jumbotron />
        <OfferSection />
        <DisplayProductHeading />
        <DisplayProducts />
        <OfferSection2 />
        <DisplayFeaturedProducts />
        <Footer />
        <FooterMinor />
    </div>
  );
}

export default App;
