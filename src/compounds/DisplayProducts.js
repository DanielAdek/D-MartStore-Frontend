import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Alias } from '../importer';

const RC = Alias.pathToSyles('displayProducts');
const { Modal } = Alias.pathToComponents('modal');
const { Slider } = Alias.pathToComponents('slider');
const { ProductData } = Alias.pathToAssets('map.v');
const { Product } = Alias.pathToComponents('product');
const { retreiveProducts } = Alias.pathToActions('ProductCRUD');
const { RingLoadScreen } = Alias.pathToComponents('spiners');
const { FeaturedProducts } = Alias.pathToComponents('featuredPro');
const { MagnifyProduct } = Alias.pathToComponents('magnifyProduct');
const { addToWishList, addToKart } = Alias.pathToActions('WishAndKartCRUD');
const token = localStorage.getItem('token');

export const DisplayProductHeading = () => {
  const handleShowAll = searchWord => {
    //  localStorage.setItem('searchWord', searchWord);
    alert('Coming Soon...');
  }
  
  return (
    <RC.DisplayHeadingContainer>
      <RC.DisplayHeadingTitle>Most Popular Products</RC.DisplayHeadingTitle>
      <RC.DisplaySubNavContainer>
        <RC.DisplayHorizontalLine />
        <RC.DisplaySubNav onClick={() => handleShowAll('shop')}>All</RC.DisplaySubNav>
        <RC.DisplaySubNav onClick={() => handleShowAll('mobile')}>Mobile</RC.DisplaySubNav>
        <RC.DisplaySubNav onClick={() => handleShowAll('fashion')}>Clothing</RC.DisplaySubNav>
        <RC.DisplaySubNav onClick={() => handleShowAll('camera')}>Camera</RC.DisplaySubNav>
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
  // const [filteredProduct, setFilteredProduct] = useState(null);
  const [currentData, setCurrentData] = useState(null);
  const [currentFigure, setCurrentFigure] = useState(1);
  const [magnifyProduct, setMagnifyProduct] = useState(false);
  const [currentImage, setCurrentImage] = useState({});


  // const searchIndex = localStorage.getItem('mostPopularFilter');
  
  useEffect(() => {
		if (!products) {
			dispatch(retreiveProducts());
		}
  }, [dispatch, products]);

  // useEffect(() => {
	// 	if (searchIndex !== 'shop') {
	// 		setFilteredProduct(
	// 			products && products.products.filter(data => data.productCategory === searchIndex)
	// 		)
	// 	} else {
	// 		setFilteredProduct(products && products.products);
	// 	}
	// }, [products, searchIndex]);
  
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
          infinit={products ? (products && products.products.length > 3) : ProductData.length > 3}>
          { ((products && products.products) || ProductData).map((data, index) => <Product
            key={index}
            index={index} 
            data={data}
            ratings={products && products.ratings}
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
  const FeaturedPro = [(products && products.products[0]), (products && products.products[1]), (products && products.products[2]), (products && products.products[3]), (products && products.products[4]), (products && products.products[5])];
  const dummyData = [ProductData[0], ProductData[1], ProductData[2], ProductData[3], ProductData[4], ProductData[5]];

  const handleShowAll = data => {
    localStorage.setItem('searchWord', data.productCategory);
    history.push('/shop');
  }
  
  return (
    <RC.Wrapper>
        <RC.SectionHeadingCont>
          <RC.Title>Featured Products</RC.Title>
          <RC.HorizontalRule />
        </RC.SectionHeadingCont>
      <RC.CardsContainer>
        {(products && products.length > 5 ? FeaturedPro : dummyData).map((data, i) => (
          <FeaturedProducts key={i} clicked={() => handleShowAll(data)} data={data} />
        ))}
      </RC.CardsContainer>
    </RC.Wrapper>
  )
}