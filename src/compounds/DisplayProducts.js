import React, { useState } from 'react';
import * as RC from '../assets/styles/displayProducts';
import { Product } from '../components/product';
import { ProductData, FeaturedProData } from '../assets/map.v';
import { FeaturedProducts } from '../components/featuredPro';

export const DisplayProductHeading = () => {
  return (
    <RC.DisplayHeadingContainer>
      <RC.DisplayHeadingTitle>Most Popular Products</RC.DisplayHeadingTitle>
      <RC.DisplaySubNavContainer>
        <RC.DisplayHorizontalLine />
        <RC.DisplaySubNav>All</RC.DisplaySubNav>
        <RC.DisplaySubNav>Mobile</RC.DisplaySubNav>
        <RC.DisplaySubNav>Clothing</RC.DisplaySubNav>
        <RC.DisplaySubNav>Shoes</RC.DisplaySubNav>
      </RC.DisplaySubNavContainer>
    </RC.DisplayHeadingContainer>
  );
}

export const DisplayProducts = () => {
  const [showProductActionBtns, setShowProductActionBtns] = useState(false);

  const displayActionBtn = index => setShowProductActionBtns(index);

  const hideActionBtn = () => setShowProductActionBtns(false);
  return (
    <RC.DisplayProductsContainer id="products">
      { ProductData.map((data, index) => <Product
        key={index}
        index={index} 
        data={data.product}
        Styles={{ mr: '5px', mb: '2px'}}
        hideActionBtn={hideActionBtn}
        showProductActionBtns={showProductActionBtns}
        displayActionBtn={() => displayActionBtn(index)} />)}
    </RC.DisplayProductsContainer>
  )
}


export const DisplayFeaturedProducts = () => {
  const handleShowAll = (x) => alert(x)
  return (
    <RC.Wrapper>
        <RC.SectionHeadingCont>
          <RC.Title>Featured Products</RC.Title>
          <RC.HorizontalRule />
        </RC.SectionHeadingCont>
      <RC.CardsContainer>
        {FeaturedProData.map((data, i) => (
          <FeaturedProducts key={i} clicked={() => handleShowAll(`${data.alt} is coming soon`)} data={data} />
        ))}
      </RC.CardsContainer>
    </RC.Wrapper>
  )
}