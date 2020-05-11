import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Alias } from '../importer';
import * as RC from '../assets/styles/magnify-Pro';

const { DualRingLoad } = Alias.pathToComponents('spiners');
const { yellowStars, greyStars, calculateFrequency } = Alias.pathToComponents('stars');

export const MagnifyProduct = props => {
	// Redux Hooks
	const history = useHistory();
	const processAddKart = useSelector(state => state.Loading.kart);
	const processAddWishlist = useSelector(state => state.Loading.wishlist);

	const handelProductSelected = productId => {
		localStorage.setItem('productSelected', productId);
		history.push('/getoneproduct');
	}

	return (
		<Fragment>
			{
				props.currentData &&
				<RC.Body>
				<RC.CloseBtn onClick={props.closeModal}>X</RC.CloseBtn>
				<RC.ContentBody>
					<RC.ProductMagnifiedImageCont>
						<RC.ProductMagnifiedImage src={props.currentImage.src} alt="product" />
					</RC.ProductMagnifiedImageCont>
				</RC.ContentBody>

				<RC.ContentBody>
					<RC.ProductRightSide>
						<RC.ProductHeading onClick={() => handelProductSelected(props.currentData._id)}>{props.currentData.productName}</RC.ProductHeading>
						<RC.ProductCaptionHeading>{props.currentData.productCaptionHeading}</RC.ProductCaptionHeading>
						<RC.ProductRR>
							<RC.ProductInfoRating>
								{yellowStars(calculateFrequency(props.currentData.ratings && props.currentData.ratings))}
								{greyStars(calculateFrequency(props.currentData.ratings && props.currentData.ratings))}
							</RC.ProductInfoRating>
							<RC.ProductInfoReview onClick={() => handelProductSelected(props.currentData._id)}>
							{(props.currentData.reviews 
								&& props.currentData.reviews.length) <= 1 ? 
							`${(props.currentData.reviews 
								&& props.currentData.reviews.length)} Review` : 
							`${(props.currentData.reviews 
								&& props.currentData.reviews.length)} Reviews`}
							</RC.ProductInfoReview>
						</RC.ProductRR>
						<RC.ProductDetails>{props.currentData.productDescription}</RC.ProductDetails>
						<hr />
						<RC.ProductStatus>
							<RC.ProductStatText>Brand: {props.currentData.productBrand}</RC.ProductStatText>
							<RC.ProductStatText>Category: {props.currentData.productCategory}</RC.ProductStatText>
							<RC.ProductStatText>Code: {props.currentData.productCode}</RC.ProductStatText>
						</RC.ProductStatus>
						<RC.ProductStatText>Avaliablilty:
								<RC.ProductStatusColor
									statusText={ props.currentData.productStatus === 'In-Stock' ? '#28a745' : '#ffd333'}>
									{props.currentData.productStatus}
								</RC.ProductStatusColor>
								<br />
							</RC.ProductStatText>
						<RC.ProductPrice className="mt-3">${(props.currentData.productPrice * (props.currentFigure && props.currentFigure))}</RC.ProductPrice>
						<RC.ProductImagesContainer>
						{props.currentData.productImages && props.currentData.productImages.map((dat, i) => (
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
								<RC.ProductActionButton onClick={props.handleKartCreate} className="btn" bgColor="#ffd333" hClr="#9b9b9b">{processAddKart ? <DualRingLoad /> : 'Add Cart' }</RC.ProductActionButton>
								<RC.ProductActionButton onClick={props.handleWishListCreate} className="btn" bgColor="blue" clr="#f3f3f3" hClr="#dbd8d8">{processAddWishlist ? <DualRingLoad /> : 'WishList'}</RC.ProductActionButton>
							</RC.ProductActionButtonSec>
						</RC.ProductActionsSection>
					</RC.ProductRightSide>
				</RC.ContentBody>
			</RC.Body>
			}
		</Fragment>
	);
};
