import React from 'react';
import * as RC from '../assets/styles/product';

export const Product = props => {
  return (
    <RC.ProductCardContainer onMouseEnter={props.displayActionBtn} onMouseLeave={props.hideActionBtn}>
      <RC.ProductMagnifyIcon>
        <RC.ProductMagnifySVG>
          <RC.ProductSVGTitle>Magnify</RC.ProductSVGTitle>
          <RC.ProductSVGPath d={RC.MagnifyAttrD}></RC.ProductSVGPath>
        </RC.ProductMagnifySVG>
      </RC.ProductMagnifyIcon>
      <RC.ProductBadge>{props.data.productStatus}</RC.ProductBadge>
      <RC.ProductImageCont>
        <RC.ProductImage src={props.data.productImages[0].image}/>
      </RC.ProductImageCont>
      <RC.ProductInfoCont>
        <RC.ProductInfoTitle>{props.data.productName}</RC.ProductInfoTitle>
        <RC.ProductInfoRRCont>
          <RC.ProductInfoRating>
            <RC.StarSVG>
              <RC.ProductSVGPath d={RC.StarAttrArea}></RC.ProductSVGPath>
              <RC.ProductSVGPath d={RC.StarAttrPerimeter}></RC.ProductSVGPath>
            </RC.StarSVG>
          </RC.ProductInfoRating>
          <RC.ProductInfoReview>12 Reviews</RC.ProductInfoReview>
        </RC.ProductInfoRRCont>
        <RC.ProductInfoPrice>${props.data.productPrice}</RC.ProductInfoPrice>
      </RC.ProductInfoCont>
      {props.index === props.showProductActionBtns && <RC.CardOverlay />}
      <RC.ProductActionContainer show={props.index === props.showProductActionBtns}>
        <RC.ProductAddButton onClick={() => alert(props.data.productName)} isWishListBtn={false}>Add Cart</RC.ProductAddButton>
        <RC.ProductAddButton isWishListBtn={true} >Wishlist</RC.ProductAddButton>
      </RC.ProductActionContainer>
    </RC.ProductCardContainer>
  )
};
