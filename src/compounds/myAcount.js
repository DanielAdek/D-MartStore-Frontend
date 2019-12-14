import React, { useState } from 'react';
import { Alias } from '../importer';

const RC = Alias.pathToSyles('myaccount');
const { SideBarNav } = Alias.pathToComponents('sideNav');
const { DashBoard, EditProfile, OrderHistory, CreateProduct } = Alias.pathToComponents('my-account');

export const MyAccount = () => {
  const DefaultComponent = <DashBoard />;

  const [View, setView] = useState(DefaultComponent);

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
