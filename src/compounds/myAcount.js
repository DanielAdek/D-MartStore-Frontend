import React, { useState } from 'react';
import * as RC from '../assets/styles/myaccount';
import { SideBarNav } from '../components/sideNav';
import { DashBoard, EditProfile, OrderHistory, CreateProduct } from '../components/my-account';

export const MyAccount = () => {
  const [View, setView] = useState(<DashBoard />);
  const handleSideNavItemClicked = component => {
   const rightSide = component === 1 ? <DashBoard /> : component === 2 ? <EditProfile /> : component === 3 ? <CreateProduct /> : component === 4 ? <OrderHistory /> : View;
   setView(rightSide);
  }

  return (
    <RC.SectionWrapper>
      <RC.SectionContainer>
        <RC.SectionHeader>My Account</RC.SectionHeader>
        <RC.SectionLayout>
          <SideBarNav 
            clicked={handleSideNavItemClicked} />
          {View}
        </RC.SectionLayout>
      </RC.SectionContainer>
    </RC.SectionWrapper>
  )
}
