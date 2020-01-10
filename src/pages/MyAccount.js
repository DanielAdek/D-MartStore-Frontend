import React, { Fragment } from 'react';
import TopNav from '../components/nav';
import { HeaderSection } from '../compounds/Header';
import { NavigationPanel } from '../components/nav-panel';
import { MyAccount } from '../compounds/myAcount';
import { Footer } from '../components/footer';

export const Dashboard = () => {
  return (
    <Fragment>
      <TopNav />
      <HeaderSection />
      <NavigationPanel initialStateGrow={false} />
      <MyAccount />
      <Footer />
    </Fragment>
  )
}