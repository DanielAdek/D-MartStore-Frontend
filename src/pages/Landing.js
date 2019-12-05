import React, { Fragment } from 'react';
import TopNav from '../components/nav';
import { HeaderSection } from '../compounds/Header';
import { NavigationPanel } from '../components/nav-panel';
import { OfferSection, OfferSection2 } from '../compounds/OfferSection';
import { DisplayProducts, DisplayProductHeading, DisplayFeaturedProducts } from '../compounds/DisplayProducts';
import { Jumbotron } from '../components/jumbotron';
import { Footer, FooterMinor } from '../components/footer';


export const Landing = () => {
  return (
    <Fragment>
      <TopNav />
      <HeaderSection />
      <NavigationPanel initialCatGrowState={true}/>
      <Jumbotron />
      <OfferSection />
      <DisplayProductHeading />
      <DisplayProducts />
      <OfferSection2 />
      <DisplayFeaturedProducts />
      <Footer />
      <FooterMinor />
    </Fragment>
  )
}