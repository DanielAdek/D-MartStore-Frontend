import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Alias } from '../importer';
import * as RC from '../assets/styles/magnify-Pro';

const { DualRingLoad } = Alias.pathToComponents('spiners');

export const MagnifyProduct = props => {
	// Redux Hooks
	const history = useHistory();

	const handelProductSelected = (productId, image) => {
		localStorage.setItem('productSelected', productId);
		localStorage.setItem('productSelectedImage', image);
		history.push('/getoneproduct');
	}
	return (
		<Fragment>
			<RC.Body>
				<RC.CloseBtn onClick={props.closeModal}>X</RC.CloseBtn>
				<RC.ContentBody>
					<RC.ProductMagnifiedImageCont>
						<RC.ProductMagnifiedImage src={props.currentData && props.currentImage.src} alt="product" />
					</RC.ProductMagnifiedImageCont>
				</RC.ContentBody>

				<RC.ContentBody>
					<RC.ProductRightSide>
						<RC.ProductHeading onClick={() => handelProductSelected(props.currentData.productCode, props.currentData.src)}>{props.currentData && props.currentData.productName}</RC.ProductHeading>
						<RC.ProductCaptionHeading>{props.currentData && props.currentData.productCaptionHeading}</RC.ProductCaptionHeading>
						<RC.ProductRR>
							<RC.ProductInfoRating>
								<RC.StarSVG>
									<RC.ProductSVGPath d={RC.StarAttrArea}></RC.ProductSVGPath>
									<RC.ProductSVGPath d={RC.StarAttrPerimeter}></RC.ProductSVGPath>
								</RC.StarSVG>
							</RC.ProductInfoRating>
							<RC.ProductInfoReview onClick={() => handelProductSelected(props.currentData.productCode)}>
								12 Reviews
							</RC.ProductInfoReview>
						</RC.ProductRR>
						<RC.ProductDetails>{props.currentData && props.currentData.productDescription}</RC.ProductDetails>
						<hr />
						<RC.ProductStatus>
							<RC.ProductStatText>Brand: {props.currentData && props.currentData.productBrand}</RC.ProductStatText>
							<RC.ProductStatText>Category: {props.currentData && props.currentData.productCategory}</RC.ProductStatText>
							<RC.ProductStatText>Code: {props.currentData && props.currentData.productCode}</RC.ProductStatText>
						</RC.ProductStatus>
						<RC.ProductStatText>Avaliablilty:
								<RC.ProductStatusColor
									statusText={ props.currentData && props.currentData.productStatus === 'In-Stock' ? '#28a745' : '#ffd333'}>
									{props.currentData && props.currentData.productStatus}
								</RC.ProductStatusColor>
								<br />
							</RC.ProductStatText>
						<RC.ProductPrice className="mt-3">${props.currentData && (props.currentData.productPrice * (props.currentFigure && props.currentFigure))}</RC.ProductPrice>
						<RC.ProductImagesContainer>
						{props.currentData && props.currentData.productImages && props.currentData.productImages.map((dat, i) => (
							<RC.ProductImages onClick={() => props.handleImageToManify(dat)} key={i} src={dat.image} />
						))}
					</RC.ProductImagesContainer>
						<RC.ProductActionsSection>
							<RC.ProductQtySection>
								<RC.ProductQtyInputDiv>
									<RC.ProductQtyInput type="number" min="1" step="1" value={props.currentFigure && props.currentFigure} onChange={props.handleChangeQty}/>
									<RC.ProductQtyButton onClick={props.handleQtyAmout} posL="1px">-</RC.ProductQtyButton>
									<RC.ProductQtyButton onClick={props.handleQtyAmout} posR="1px">+</RC.ProductQtyButton>
								</RC.ProductQtyInputDiv>
							</RC.ProductQtySection>
							<RC.ProductActionButtonSec>
								<RC.ProductActionButton onClick={props.handleKartCreate} className="btn" bgColor="#ffd333" hClr="#9b9b9b">{props.loading ? <DualRingLoad /> : 'Add Cart' }</RC.ProductActionButton>
								<RC.ProductActionButton onClick={props.handleWishListCreate} className="btn" bgColor="blue" clr="#f3f3f3" hClr="#dbd8d8">{props.loading ? <DualRingLoad /> : 'WishList'}</RC.ProductActionButton>
							</RC.ProductActionButtonSec>
						</RC.ProductActionsSection>
					</RC.ProductRightSide>
				</RC.ContentBody>
			</RC.Body>
		</Fragment>
	);
};
