import React, { Fragment } from 'react';
import TopNav from '../components/nav';
import { HeaderSection } from '../compounds/Header';
import { NavigationPanel } from '../components/nav-panel';
import { Shop } from '../compounds/shop';
import { Footer } from '../components/footer';


export const ShopPage = () => {
  return (
    <Fragment>
      <TopNav />
      <HeaderSection />
      <NavigationPanel initialCatGrowState={false}/>
      <Shop />
      <Footer />
    </Fragment>
  )
}