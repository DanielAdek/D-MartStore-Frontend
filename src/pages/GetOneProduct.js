import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopNav from '../components/nav';
import { HeaderSection } from '../compounds/Header';
import { NavigationPanel } from '../components/nav-panel';
import { ProductData } from '../assets/map.v';
import { Footer } from '../components/footer';
import NavTabs from '../components/tab';
import * as RC from '../assets/styles/magnify-Pro';
import { DisplayProductHeading, DisplayProducts } from '../compounds/DisplayProducts';

export const GetOneProduct = () => {
	const [product, setProduct] = useState(null);

	useEffect(() => {
		setProduct(ProductData[0]);
	}, []);
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
								<RC.ProductMagnifiedImage src={product.product.productImages[0].image} alt="product" />
							</RC.ProductMagnifiedImageCont>
						</RC.ContentBody>

						<RC.ContentBody>
							<RC.ProductRightSide>
								<RC.ProductHeading>{product.product.productName}</RC.ProductHeading>
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
								<RC.ProductDetails>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in
									ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus.
									Maecenas eu varius nisi.
								</RC.ProductDetails>
								<hr />
								<RC.ProductStatus>
									<RC.ProductStatText>
										Avaliablilty:{' '}
										<RC.ProductStatusColor
											statusText={
												product.product.productAvailablility === 'In Stock'
													? '#28a745'
													: '#ffd333'
											}>
											{product.product.productAvailablility}
										</RC.ProductStatusColor>{' '}
									</RC.ProductStatText>
									<RC.ProductStatText>Brand: {product.product.productBrand}</RC.ProductStatText>
									<RC.ProductStatText>Code: {product.product._id}</RC.ProductStatText>
								</RC.ProductStatus>
								<RC.ProductPrice>${product.product.productPrice}</RC.ProductPrice>
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
								{product.product.productImages.map((dat, i) => (
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
