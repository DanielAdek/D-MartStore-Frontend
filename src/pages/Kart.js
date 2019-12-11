import React, { Fragment } from 'react';
import TopNav from '../components/nav';
import { HeaderSection } from '../compounds/Header';
import { NavigationPanel } from '../components/nav-panel';
import { KartList } from '../compounds/kart';
import { Footer, FooterMinor } from '../components/footer';


export const KartPage = () => {
  return (
    <Fragment>
      <TopNav />
      <HeaderSection />
      <NavigationPanel initialCatGrowState={false}/>
      <KartList />
      <Footer />
      <FooterMinor />
    </Fragment>
  )
}