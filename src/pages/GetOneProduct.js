import React, { Fragment, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alias } from '../importer'; 
import TopNav from '../components/nav';
import { HeaderSection } from '../compounds/Header';
import { NavigationPanel } from '../components/nav-panel';
import { Footer } from '../components/footer';
import NavTabs from '../components/tab';
import * as RC from '../assets/styles/magnify-Pro';
import { DisplayProductHeading, DisplayProducts } from '../compounds/DisplayProducts';

// const { DualRingLoadScreen } = Alias.pathToComponents('spiners');
const { addToWishList, addToKart } = Alias.pathToActions('WishAndKartCRUD');

export const GetOneProduct = () => {
	// Redux Hooks
	const dispatch = useDispatch();
	const products = useSelector(state => state.ProductCRUD.products);

	// React Hooks
	const [product, setProduct] = useState(null);
  const [currentFigure, setCurrentFigure] = useState(1);
  const [currentImage, setCurrentImage] = useState({ src: products && products[0].productImages[0].image, id: 1});
	const navDiv = useRef(null);

	useEffect(() => {
		setProduct(
			products && products.filter(data => data.productCode === localStorage.getItem('productSelected'))[0]
		)
		if (navDiv.current) {
			navDiv.current.scrollIntoView({ 
				behavior: "smooth", 
				block: "end"
		 });
		}
	}, [products]);


	const handleGoToReview = () => {
		if (navDiv.current) {
			navDiv.current.scrollIntoView({ 
				behavior: "smooth", 
				block: "start"
		 });
		}
	}

	const handleImageToManify = product => setCurrentImage({ src: product.image, id: product.id});


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
			<h4 className="mt-5 mb-5" style={{width: '90%', margin: '1px auto', fontFamily: 'Rubik sans-serif', fontWeight: 'bolder'}}>DMStore Product</h4>
			<div className="wrapers">
				{product && (
					<RC.Body>
						<RC.ContentBody>
							<RC.ProductMagnifiedImageCont>
								<RC.ProductMagnifiedImage src={currentImage.src || localStorage.getItem('productSelectedImage')} alt="product" />
							</RC.ProductMagnifiedImageCont>
						</RC.ContentBody>

						<RC.ContentBody>
							<RC.ProductRightSide>
								<RC.ProductHeading>{product.productName}</RC.ProductHeading>
								<RC.ProductRR>
									<RC.ProductInfoRating>
										<RC.StarSVG>
											<RC.ProductSVGPath d={RC.StarAttrArea}></RC.ProductSVGPath>
											<RC.ProductSVGPath d={RC.StarAttrPerimeter}></RC.ProductSVGPath>
										</RC.StarSVG>
									</RC.ProductInfoRating>
									<RC.ProductInfoReview onClick={handleGoToReview}>
										12 Reviews
									</RC.ProductInfoReview>
								</RC.ProductRR>
								<RC.ProductDetails>{product.productDescription}</RC.ProductDetails>
								<hr />
								<RC.ProductStatus>
									<RC.ProductStatText>
										Avaliablilty:{' '}
										<RC.ProductStatusColor
											statusText={
												product.productStatus=== 'In-Stock'
													? '#28a745'
													: '#ffd333'
											}>
											{product.productStatus}
										</RC.ProductStatusColor>{' '}
									</RC.ProductStatText>
									<RC.ProductStatText>Brand: {product.productBrand}</RC.ProductStatText>
									<RC.ProductStatText>Code: {product.productCode}</RC.ProductStatText>
								</RC.ProductStatus>
								<RC.ProductPrice>${currentFigure * product.productPrice}</RC.ProductPrice>
									<RC.ProductImagesContainer>
									{product.productImages.map((dat, i) => (
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
										<RC.ProductActionButton onClick={() => handleKartCreate(product)}
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
											onClick={() => handleWishListCreate(product)}
										>
											WishList
										</RC.ProductActionButton>
									</RC.ProductActionButtonSec>
								</RC.ProductActionsSection>
							</RC.ProductRightSide>
						</RC.ContentBody>
					</RC.Body>
				)}
				<RC.ProductReviewSecWrapper ref={navDiv}>
					<NavTabs product={product}/>
				</RC.ProductReviewSecWrapper>
				<DisplayProductHeading />
				<DisplayProducts />
			</div>
			<div className="mt-5">
				<Footer />
			</div>
		</Fragment>
	);
};
