import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Alias } from '../importer';
import * as RC from '../assets/styles/product';

const { DualRingLoad } = Alias.pathToComponents('spiners');
const { yellowStars, greyStars, calculateFrequency } = Alias.pathToComponents('stars');

export const Product = props => {
  // Redux Hooks
  const history = useHistory();
	const processAddKart = useSelector(state => state.Loading.kart);
	const processAddWishlist = useSelector(state => state.Loading.wishlist);

	const handelProductSelected = productId => {
		localStorage.setItem('productSelected', productId);
		history.push('/getoneproduct');
  }
  
  const targetedProduct = props.index === props.showProductActionBtns;

  return (
    <Fragment>
      { props.data && 
      <RC.ProductCardContainer width={props.width} mr={props.Styles.mr} mb={props.Styles.mb} onMouseEnter={props.displayActionBtn} onMouseLeave={props.hideActionBtn}>
        <RC.ProductMagnifyIcon onClick={props.magnify}>
          <RC.ProductMagnifySVG>
            <RC.ProductSVGTitle>Magnify</RC.ProductSVGTitle>
            <RC.ProductSVGPath d={RC.MagnifyAttrD}></RC.ProductSVGPath>
          </RC.ProductMagnifySVG>
        </RC.ProductMagnifyIcon>
        <RC.ProductBadge bColor={props.data.productTag}>{props.data.productTag}</RC.ProductBadge>
        <RC.ProductImageCont>
          <RC.ProductImage src={props.data.productImages[0] && props.data.productImages[0].image}/>
        </RC.ProductImageCont>
        <RC.ProductInfoCont>
          <RC.ProductInfoTitle  onClick={() => handelProductSelected(props.data._id)}>{props.data.productName}</RC.ProductInfoTitle>
          <RC.ProductInfoRRCont>
            <RC.ProductInfoRating>
              {yellowStars(calculateFrequency(props.data.ratings))}
              {greyStars(calculateFrequency(props.data.ratings))}
            </RC.ProductInfoRating>
            <RC.ProductInfoReview  onClick={() => handelProductSelected(props.data._id)}>
            {(props.data.reviews 
              && props.data.reviews.length) <= 1 ? 
            `${(props.data.reviews
              && props.data.reviews.length)} Review` : 
            `${(props.data.reviews 
              && props.data.reviews.length)} Reviews`}
            </RC.ProductInfoReview>
          </RC.ProductInfoRRCont>
          <RC.ProductInfoPrice>${props.data.productPrice}</RC.ProductInfoPrice>
        </RC.ProductInfoCont>
        {targetedProduct && <RC.CardOverlay />}
        <RC.ProductActionContainer show={targetedProduct}>
          <RC.ProductAddButton onClick={props.handleKartCreate} isWishListBtn={false}>{ (processAddKart && targetedProduct)? <DualRingLoad /> : 'Add Cart' }</RC.ProductAddButton>
          <RC.ProductAddButton onClick={props.handleWishListCreate} isWishListBtn={true} >{ (processAddWishlist && targetedProduct)? <DualRingLoad /> : 'WishList' }</RC.ProductAddButton>
        </RC.ProductActionContainer>
      </RC.ProductCardContainer>
      }
    </Fragment>
  )
};
