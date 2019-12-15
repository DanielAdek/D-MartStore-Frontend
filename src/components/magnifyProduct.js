import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as RC from '../assets/styles/magnify-Pro';

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
						<RC.ProductHeading>{props.currentData.productName}</RC.ProductHeading>
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
						<RC.ProductDetails>{props.currentData.productDescription}</RC.ProductDetails>
						<hr />
						<RC.ProductStatus>
							<RC.ProductStatText>Brand: {props.currentData.productBrand}</RC.ProductStatText>
							<RC.ProductStatText>Category: {props.currentData.productCategory}</RC.ProductStatText>
							<RC.ProductStatText>Code: {props.currentData._id}</RC.ProductStatText>
						</RC.ProductStatus>
						<RC.ProductStatText> Avaliablilty:
								<RC.ProductStatusColor
									statusText={ props.currentData.productStatus && props.currentData.productStatus.toLowerCase() === 'in-stock' ? '#28a745' : '#ffd333'}>
									{props.currentData.productStatus}
								</RC.ProductStatusColor>
								<br />
							</RC.ProductStatText>
						<RC.ProductPrice className="mt-3">${props.currentData.productPrice}</RC.ProductPrice>
						<RC.ProductImagesContainer>
						{props.currentData.productImages && props.currentData.productImages.map((dat, i) => (
							<RC.ProductImages onClick={() => props.handleImageToManify(dat)} src={dat.image} />
						))}
					</RC.ProductImagesContainer>
						<RC.ProductActionsSection>
							<RC.ProductQtySection>
								<RC.ProductQtyInputDiv>
									<RC.ProductQtyInput type="number" min="1" step="1" value={props.currentFigure} onChange={props.handleChangeQty}/>
									<RC.ProductQtyButton onClick={props.handleQtyAmout} posL="1px">-</RC.ProductQtyButton>
									<RC.ProductQtyButton onClick={props.handleQtyAmout} posR="1px">+</RC.ProductQtyButton>
								</RC.ProductQtyInputDiv>
							</RC.ProductQtySection>
							<RC.ProductActionButtonSec>
								<RC.ProductActionButton onClick={props.handleKartCreate} className="btn" bgColor="#ffd333" hClr="#9b9b9b">Add Cart</RC.ProductActionButton>
								<RC.ProductActionButton onClick={props.handleWishListCreate} className="btn" bgColor="blue" clr="#f3f3f3" hClr="#dbd8d8">WishList</RC.ProductActionButton>
							</RC.ProductActionButtonSec>
						</RC.ProductActionsSection>
					</RC.ProductRightSide>
				</RC.ContentBody>
			</RC.Body>
		</Fragment>
	);
};
