import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as RC from '../assets/styles/magnify-Pro';

// props.currentData.product.productName;

export const MagnifyProduct = props => {
	return (
		<Fragment>
			<RC.Body>
				<RC.CloseBtn onClick={props.closeModal}>X</RC.CloseBtn>
				<RC.ContentBody>
					<RC.ProductMagnifiedImageCont>
						<RC.ProductMagnifiedImage src={props.currentImage.src} alt="product" />
					</RC.ProductMagnifiedImageCont>
				</RC.ContentBody>

				<RC.ContentBody>
					<RC.ProductRightSide>
						<RC.ProductHeading>{props.currentData.product.productName}</RC.ProductHeading>
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare
							elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius
							nisi.
						</RC.ProductDetails>
						<hr />
						<RC.ProductStatus>
							<RC.ProductStatText>
								Avaliablilty:{' '}
								<RC.ProductStatusColor
									statusText={
										props.currentData.product.productAvailablility === 'In Stock'
											? '#28a745'
											: '#ffd333'
									}
								>
									{props.currentData.product.productAvailablility}
								</RC.ProductStatusColor>{' '}
							</RC.ProductStatText>
							<RC.ProductStatText>Brand: {props.currentData.product.productBrand}</RC.ProductStatText>
							<RC.ProductStatText>Code: {props.currentData.product._id}</RC.ProductStatText>
						</RC.ProductStatus>
						<RC.ProductPrice>${props.currentData.product.productPrice}</RC.ProductPrice>
						<RC.ProductActionsSection>
							<RC.ProductQtySection>
								<RC.ProductQtyInputDiv>
									<RC.ProductQtyInput
										type="number"
										min="1"
										step="1"
										value={props.currentFigure}
										onChange={props.handleChangeQty}
									/>
									<RC.ProductQtyButton onClick={props.handleQtyAmout} posL="1px">
										-
									</RC.ProductQtyButton>
									<RC.ProductQtyButton onClick={props.handleQtyAmout} posR="1px">
										+
									</RC.ProductQtyButton>
								</RC.ProductQtyInputDiv>
							</RC.ProductQtySection>
							<RC.ProductActionButtonSec>
								<RC.ProductActionButton className="btn" bgColor="#ffd333" hClr="#9b9b9b">
									Add Cart
								</RC.ProductActionButton>
								<RC.ProductActionButton className="btn" bgColor="blue" clr="#f3f3f3" hClr="#dbd8d8">
									WishList
								</RC.ProductActionButton>
							</RC.ProductActionButtonSec>
						</RC.ProductActionsSection>
					</RC.ProductRightSide>
					<RC.ProductImagesContainer>
						{props.currentData.product.productImages.map((dat, i) => (
							<RC.ProductImages onClick={() => props.handleImageToManify(dat)} src={dat.image} />
						))}
					</RC.ProductImagesContainer>
				</RC.ContentBody>
			</RC.Body>
		</Fragment>
	);
};
