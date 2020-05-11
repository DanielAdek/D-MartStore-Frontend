import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { handleGenerateCode } from '../store/actions/Authentication';
import TopNav from '../components/nav';
import { HeaderSection } from '../compounds/Header';
import { NavigationPanel } from '../components/nav-panel';
import { OfferSection, OfferSection2 } from '../compounds/OfferSection';
import { DisplayProducts, DisplayProductHeading, DisplayFeaturedProducts } from '../compounds/DisplayProducts';
import { Jumbotron } from '../components/jumbotron';
import { Footer } from '../components/footer';


export const Landing = () => {
  const token = localStorage.getItem('x-auth-t');
  const unRegisteredCustomerToken = localStorage.getItem('token');
  
  // Redux Hooks
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.Authenticate.userCode);

  // React Hooks
  useEffect(() => {
    if (!token && !unRegisteredCustomerToken) {
      dispatch(handleGenerateCode());
    }
  }, [dispatch, token, unRegisteredCustomerToken]);
  
  useEffect(() => {
    if (userToken) {
      localStorage.setItem('token', userToken);
    }
  }, [userToken]);

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
    </Fragment>
  )
}