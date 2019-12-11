import React, { Fragment } from 'react';
import TopNav from '../components/nav';
import { HeaderSection } from '../compounds/Header';
import { NavigationPanel } from '../components/nav-panel';
import { WishList } from '../compounds/wishlist';
import { Footer, FooterMinor } from '../components/footer';


export const WishListPage = () => {
  return (
    <Fragment>
      <TopNav />
      <HeaderSection />
      <NavigationPanel initialCatGrowState={false}/>
      <WishList />
      <Footer />
      <FooterMinor />
    </Fragment>
  )
}