import React, { Fragment, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';
import { Alias } from '../importer';

const NavTabs= Alias.pathToComponents('tab').default;
const TopNav = Alias.pathToComponents('nav').default;

// const { DualRingLoadScreen } = Alias.pathToComponents('spiners');
const RC = Alias.pathToSyles('magnify-Pro');
const { Modal } = Alias.pathToComponents('modal');
const { Footer } = Alias.pathToComponents('footer');
// const { ProductData } = Alias.pathToAssets('map.v');
const { Product } = Alias.pathToComponents('product');
const { HeaderSection } = Alias.pathToCompounds('Header');
const { retreiveProduct } = Alias.pathToActions('ProductCRUD');
const { NavigationPanel } = Alias.pathToComponents('nav-panel');
const { MagnifyProduct } = Alias.pathToComponents('magnifyProduct');
const { addToWishList, addToKart } = Alias.pathToActions('WishAndKartCRUD');
const { yellowStars, greyStars, calculateFrequency } = Alias.pathToComponents('stars');

export const GetOneProduct = () => {
	// Redux Hooks
	const dispatch = useDispatch();
	const product = useSelector(state => state.ProductCRUD.product);
	const processing = useSelector(state => state.Loading.loading);
	const kartBtnClicked = useSelector(state => state.Loading.loadInComponent);
	const wishBtnClicked = useSelector(state => state.Loading.loadInComponent);

	// React Hooks
  const [currentFigure, setCurrentFigure] = useState(1);
	const [currentImage, setCurrentImage] = useState({});
	const [currentData, setCurrentData] = useState(null);
	const [magnifyProduct, setMagnifyProduct] = useState(false);
	const [showProductActionBtns, setShowProductActionBtns] = useState(false);
	const navDiv = useRef(null);

	useEffect(() => {
		dispatch(retreiveProduct(localStorage.getItem('productSelected')));
		if (navDiv.current) {
			navDiv.current.scrollIntoView({ 
				behavior: "smooth", 
				block: "end"
		 });
		}
	}, [dispatch]);


	const handleGoToReview = () => {
		if (navDiv.current) {
			navDiv.current.scrollIntoView({ 
				behavior: "smooth", 
				block: "start"
		 });
		}
	}

	const handleMagnifyProduct = data => {
    setMagnifyProduct(true);
    setCurrentData(data)
    setCurrentImage({ src: data.productImages[0].image, id: data.productImages[0].id })
  }

	const handleImageToManify = product => setCurrentImage({ src: product.image, id: product.id});

	const hideActionBtn = () => setShowProductActionBtns(false);

	const displayActionBtn = index => setShowProductActionBtns(index);

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
		const kartData = { productId: product._id, quantity: currentFigure, imageType: currentImage.id || 1};
		dispatch(addToKart({ kartData }));
	}

	const handleWishListCreate = product => {
		const token = localStorage.getItem('token');
		const data = { imageType: currentImage.id || 1, productId: product._id, wishlistcode: token || "" }
		dispatch(addToWishList(data));
	}

	return (
		<Fragment>
			<TopNav />
			<HeaderSection />
			<NavigationPanel initialCatGrowState={false} />
			<h4 className="mt-5 mb-5" style={{width: '90%', margin: '1px auto', fontFamily: 'Rubik sans-serif', fontWeight: 'bolder'}}>DMS Product</h4>
			{product && (
			<div className="wrapers">
					<RC.MainWrapper>
						<RC.ContentBody>
							<RC.ProductMagnifiedImageCont>
								<RC.ProductMagnifiedImage src={currentImage.src || (product && product.product && product.product.productImages[0] && product.product.productImages[0].image)} alt="product" />
							</RC.ProductMagnifiedImageCont>
						</RC.ContentBody>

						<RC.ContentBody>
							<RC.ProductRightSide>
								<RC.ProductHeading>{product.product.productName}</RC.ProductHeading>
								<RC.ProductRR>
									<RC.ProductInfoRating>
										{yellowStars(calculateFrequency(product.product && product.product.ratings))}
										{greyStars(calculateFrequency(product.product && product.product.ratings))}
									</RC.ProductInfoRating>
									<RC.ProductInfoReview onClick={handleGoToReview}>
										{product.product.reviews.length <= 1 ? `${product.product.reviews.length} Review` : `${product.product.reviews.length} Reviews`}
									</RC.ProductInfoReview>
								</RC.ProductRR>
								<RC.ProductDetails>{product.product.productDescription}</RC.ProductDetails>
								<hr />
								<RC.ProductStatus>
									<RC.ProductStatText>
										Avaliablilty:{' '}
										<RC.ProductStatusColor
											statusText={
												product.product.productStatus=== 'In-Stock'
													? '#28a745'
													: '#ffd333'
											}>
											{product.product.productStatus}
										</RC.ProductStatusColor>{' '}
									</RC.ProductStatText>
									<RC.ProductStatText>Brand: {product.product.productBrand}</RC.ProductStatText>
									<RC.ProductStatText>Code: {product.product.productCode}</RC.ProductStatText>
								</RC.ProductStatus>
								<RC.ProductPrice>${currentFigure * product.product.productPrice}</RC.ProductPrice>
									<RC.ProductImagesContainer>
									{product.product && product.product.productImages && product.product.productImages.map((dat, i) => (
										<RC.ProductImages
											key={i}
											onClick={() => handleImageToManify(dat)}
											src={dat.image}
										/>
									))}
								</RC.ProductImagesContainer>
								<RC.ProductActionsSection>
									<RC.ProductQtySection>
										<RC.ProductQtyInputDiv>
											<RC.ProductQtyInput
												type="number"
												min="1"
												step="1"
												value={currentFigure}
												onChange={handleChangeQty}
											/>
											<RC.ProductQtyButton onClick={handleQtyAmout} posL="1px">
												-
											</RC.ProductQtyButton>
											<RC.ProductQtyButton onClick={handleQtyAmout} posR="1px">
												+
											</RC.ProductQtyButton>
										</RC.ProductQtyInputDiv>
									</RC.ProductQtySection>
									<RC.ProductActionButtonSec>
										<RC.ProductActionButton onClick={() => handleKartCreate(product.product)}
											className="btn"
											bgColor="#ffd333"
											hClr="#9b9b9b">
											Add Cart
										</RC.ProductActionButton>
										<RC.ProductActionButton
											className="btn"
											bgColor="blue"
											clr="#f3f3f3"
											hClr="#dbd8d8"
											onClick={() => handleWishListCreate(product.product)}
										>
											WishList
										</RC.ProductActionButton>
									</RC.ProductActionButtonSec>
								</RC.ProductActionsSection>
							</RC.ProductRightSide>
						</RC.ContentBody>
					</RC.MainWrapper>
				<RC.ProductReviewSecWrapper ref={navDiv}>
					<NavTabs product={product}/>
				</RC.ProductReviewSecWrapper>
				<RC.RelatedProductsCont>
					<RC.RelatedProductHeading>Related Products</RC.RelatedProductHeading>
					<RC.HorizontalRule />
				</RC.RelatedProductsCont>
				<RC.DisplayProductsContainer>
					<Slider
						arrows
						slidesPerPage={5}
						slidesPerScroll={2}
						stopAutoPlayOnHover
						offset={50}
						itemWidth={350}>
						{ (product && product.relatedProducts).map((data, index) => <Product
							data={data}
							key={index}
							index={index}
							ratings={product && product.product && product.product.ratings}
							hideActionBtn={hideActionBtn}
							wishBtnClicked={wishBtnClicked}
							kartBtnClicked={kartBtnClicked}
							Styles={{ mr: '5px', mb: '2px'}}
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
			</div>)}
			<div className="mt-5">
				<Footer />
			</div>
		</Fragment>
	);
};
