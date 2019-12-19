import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TopNav from '../components/nav';
import { HeaderSection } from '../compounds/Header';
import { NavigationPanel } from '../components/nav-panel';
// import { ProductData } from '../assets/map.v';
import { Footer } from '../components/footer';
import NavTabs from '../components/tab';
import * as RC from '../assets/styles/magnify-Pro';
import { DisplayProductHeading, DisplayProducts } from '../compounds/DisplayProducts';

export const GetOneProduct = () => {
	// Redux Hooks
	// const dispatch = useDispatch();
	const products = useSelector(state => state.ProductCRUD.products);

	// React Hooks
	const [product, setProduct] = useState(null);

	useEffect(() => {
		setProduct(
			products && products.filter(data => data.productCode === localStorage.getItem('productSelected'))[0]
		);
	}, [products]);

	console.log(product);

	return (
		<Fragment>
			<TopNav />
			<HeaderSection />
			<NavigationPanel initialCatGrowState={false} />
			<div className="wrapers">
				{product && (
					<RC.Body>
						<RC.ContentBody>
							<RC.ProductMagnifiedImageCont>
								<RC.ProductMagnifiedImage src={product.productImages[0].image} alt="product" />
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
									<RC.ProductInfoReview onClick>
										<Link to="/getoneproduct"> 12 Reviews</Link>
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
								<RC.ProductPrice>${product.productPrice}</RC.ProductPrice>
								<RC.ProductActionsSection>
									<RC.ProductQtySection>
										<RC.ProductQtyInputDiv>
											<RC.ProductQtyInput
												type="number"
												min="1"
												step="1"
												value={product.currentFigure}
												onChange={product.handleChangeQty}
											/>
											<RC.ProductQtyButton onClick={product.handleQtyAmout} posL="1px">
												-
											</RC.ProductQtyButton>
											<RC.ProductQtyButton onClick={product.handleQtyAmout} posR="1px">
												+
											</RC.ProductQtyButton>
										</RC.ProductQtyInputDiv>
									</RC.ProductQtySection>
									<RC.ProductActionButtonSec>
										<RC.ProductActionButton className="btn" bgColor="#ffd333" hClr="#9b9b9b">
											Add Cart
										</RC.ProductActionButton>
										<RC.ProductActionButton
											className="btn"
											bgColor="blue"
											clr="#f3f3f3"
											hClr="#dbd8d8"
										>
											WishList
										</RC.ProductActionButton>
									</RC.ProductActionButtonSec>
								</RC.ProductActionsSection>
							</RC.ProductRightSide>
							<RC.ProductImagesContainer>
								{product.productImages.map((dat, i) => (
									<RC.ProductImages
										onClick={() => product.handleImageToManify(dat)}
										src={dat.image}
									/>
								))}
							</RC.ProductImagesContainer>
						</RC.ContentBody>
					</RC.Body>
				)}
				<NavTabs />
				<DisplayProductHeading />
				<DisplayProducts />
			</div>
			<div>
				<Footer />
			</div>
		</Fragment>
	);
};
