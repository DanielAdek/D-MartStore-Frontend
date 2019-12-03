import React from 'react';
import Logo from '../components/logo';
import Search from '../components/search';
import * as RC from '../assets/styles/header';
import Contact from '../components/contact';

export const HeaderSection = () => {
  return (
    <RC.HeaderFlexSection>
      <Logo />
      <Search />
      <Contact />
    </RC.HeaderFlexSection>
  )
}