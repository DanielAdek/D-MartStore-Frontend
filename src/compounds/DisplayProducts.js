import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Slider from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';
import { Alias } from '../importer';
import * as RC from '../assets/styles/displayProducts';
import { Product } from '../components/product';
// import { FeaturedProData } from '../assets/map.v';
import { FeaturedProducts } from '../components/featuredPro';
import { Modal } from '../components/modal';
import { MagnifyProduct } from '../components/magnifyProduct';

const { retreiveProducts } = Alias.pathToActions('ProductCRUD');
const { RingLoadScreen } = Alias.pathToComponents('spiners');
const { addToWishList, addToKart } = Alias.pathToActions('WishAndKartCRUD');
const { ProductData } = Alias.pathToAssets('map.v');
const token = localStorage.getItem('token');

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
  // Redux Hooks
  const dispatch = useDispatch();
	const products = useSelector(state => state.ProductCRUD.products);
	const processing = useSelector(state => state.Loading.loading);
	const kartBtnClicked = useSelector(state => state.Loading.loadInComponent);
	const wishBtnClicked = useSelector(state => state.Loading.loadInComponent);
  
  // React Hooks
  const [showProductActionBtns, setShowProductActionBtns] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [currentFigure, setCurrentFigure] = useState(1);
  const [magnifyProduct, setMagnifyProduct] = useState(false);
  const [currentImage, setCurrentImage] = useState({});

  useEffect(() => {
		if (!products) {
			dispatch(retreiveProducts());
		}
  }, [dispatch, products]);
  
  const hideActionBtn = () => setShowProductActionBtns(false);

  const handleImageToManify = (dat) => setCurrentImage({ src: dat.image, id: dat.id});

  const handleMagnifyProduct = data => {
    setMagnifyProduct(true);
    setCurrentData(data)
    setCurrentImage({ src: data.productImages[0].image, id: data.productImages[0].id })
  }
  
  const closeModal = data => {
    setMagnifyProduct(false);
    setCurrentFigure(1);
    setCurrentImage({});
    setCurrentData(null)
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

	const handleKartCreate = product => {
    const kartData = { productId: product._id, quantity: currentFigure, imageType: currentImage.id || 1, kartCode: token || ''};
		dispatch(addToKart({ kartData }));
	}
  
	const handleWishListCreate = product => {
		const data = { imageType: currentImage.id || 1, productId: product._id, wishlistcode: token || "" }
		dispatch(addToWishList(data));
	}

  const displayActionBtn = index => setShowProductActionBtns(index);

  return (
    <Fragment>
      { processing && <RingLoadScreen text="Loading.." />}
      <RC.DisplayProductsContainer>
        <Slider
          arrows
          slidesPerPage={5}
          slidesPerScroll={2}
          infinite
          animationSpeed={1500}
          autoPlay={3000}
          stopAutoPlayOnHover
          offset={50}
          itemWidth={350}
          clickToChange
          centered>
          { (products || ProductData).map((data, index) => <Product
            key={index}
            index={index} 
            data={data}
            wishBtnClicked={wishBtnClicked}
            kartBtnClicked={kartBtnClicked}
            Styles={{ mr: '5px', mb: '2px'}}
            hideActionBtn={hideActionBtn}
            magnify={() => handleMagnifyProduct(data)}
            showProductActionBtns={showProductActionBtns}
            handleKartCreate={() => handleKartCreate(data)}
            displayActionBtn={() => displayActionBtn(index)} 
            handleWishListCreate={() => handleWishListCreate(data)}
            />)}
        </Slider>
      </RC.DisplayProductsContainer>
      <Modal visible={magnifyProduct}>
          <MagnifyProduct 
            loading={processing}
            closeModal={closeModal}
            currentData={currentData}
            currentImage={currentImage}
            currentFigure={currentFigure}
            wishBtnClicked={wishBtnClicked}
            kartBtnClicked={kartBtnClicked}
            handleQtyAmout={handleQtyAmout}
            handleChangeQty={handleChangeQty}
            handleImageToManify={handleImageToManify}
            handleKartCreate={() => handleKartCreate(currentData)}
            handleWishListCreate={() => handleWishListCreate(currentData)}
          />
        </Modal>
    </Fragment>
  )
}

export const DisplayFeaturedProducts = () => {
  // Redux Hook
  const history = useHistory();

  // React Hook
  const products = useSelector(state => state.ProductCRUD.products);
  const FeaturedPro = [(products && products[0]), (products && products[1]), (products && products[2]), (products && products[3]), (products && products[0]), (products && products[1])]
  const handleShowAll = data => {
    localStorage.setItem('category', data.productCategory);
    history.push('/shop');
  }
  return (
    <RC.Wrapper>
        <RC.SectionHeadingCont>
          <RC.Title>Featured Products</RC.Title>
          <RC.HorizontalRule />
        </RC.SectionHeadingCont>
      <RC.CardsContainer>
        {products && FeaturedPro.map((data, i) => (
          <FeaturedProducts key={i} clicked={() => handleShowAll(data)} data={data} />
        ))}
      </RC.CardsContainer>
    </RC.Wrapper>
  )
}