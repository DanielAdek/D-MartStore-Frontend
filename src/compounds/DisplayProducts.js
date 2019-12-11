import React, { useState, Fragment } from 'react';
import * as RC from '../assets/styles/displayProducts';
import { Product } from '../components/product';
import { ProductData, FeaturedProData } from '../assets/map.v';
import { FeaturedProducts } from '../components/featuredPro';
import { Modal } from '../components/modal';
import { MagnifyProduct } from '../components/magnifyProduct';

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
  const [currentData, setCurrentData] = useState(ProductData[0]);
  const [currentFigure, setCurrentFigure] = useState(1);
  const [magnifyProduct, setMagnifyProduct] = useState(false);
  const [currentImage, setCurrentImage] = useState({});

  const hideActionBtn = () => setShowProductActionBtns(false);

  const handleImageToManify = (dat) => setCurrentImage({ src: dat.image, type: dat.type});

  const handleMagnifyProduct = data => {
    setMagnifyProduct(true);
    setCurrentData(data)
    setCurrentImage({ src: data.product.productImages[0].image, type: data.product.productImages[0].type })
  }
  
  const closeModal = data => {
    setMagnifyProduct(false);
    setCurrentFigure(1);
  }

  // const handleStars = () => {}

  const handleQtyAmout = event => {
    let figure = currentFigure;
    if (event.target.textContent === "+") { figure+=1; }
    if (event.target.textContent === "-") {
      figure -= 1;
      if (currentFigure <= 1) { figure = 1};
    }
    setCurrentFigure(figure);
  }

  const handleChangeQty = (event) => {
    setCurrentFigure(event.target.value <= 1 ? 1 : parseInt(event.target.value, 10));
  }

  const displayActionBtn = index => setShowProductActionBtns(index);

  return (
    <Fragment>
    <RC.DisplayProductsContainer id="products">
      { ProductData.map((data, index) => <Product
        key={index}
        index={index} 
        data={data.product}
        Styles={{ mr: '5px', mb: '2px'}}
        hideActionBtn={hideActionBtn}
        showProductActionBtns={showProductActionBtns}
        magnify={() => handleMagnifyProduct(data)}
        displayActionBtn={() => displayActionBtn(index)} />)}
    </RC.DisplayProductsContainer>
    <Modal visible={magnifyProduct}>
        <MagnifyProduct 
          closeModal={closeModal}
          currentData={currentData}
          currentImage={currentImage}
          currentFigure={currentFigure}
          handleQtyAmout={handleQtyAmout}
          handleChangeQty={handleChangeQty}
          handleImageToManify={handleImageToManify}
        />
      </Modal>
    </Fragment>
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