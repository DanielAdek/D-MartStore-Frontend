import React from 'react';
import { Alias } from '../importer';
import * as RC from '../assets/styles/product';

const { DualRingLoad } = Alias.pathToComponents('spiners');

export const Product = props => {
  const targetedProduct = props.index === props.showProductActionBtns;
  return (
    <RC.ProductCardContainer mr={props.Styles.mr} mb={props.Styles.mb} onMouseEnter={props.displayActionBtn} onMouseLeave={props.hideActionBtn}>
      <RC.ProductMagnifyIcon onClick={props.magnify}>
        <RC.ProductMagnifySVG>
          <RC.ProductSVGTitle>Magnify</RC.ProductSVGTitle>
          <RC.ProductSVGPath d={RC.MagnifyAttrD}></RC.ProductSVGPath>
        </RC.ProductMagnifySVG>
      </RC.ProductMagnifyIcon>
      <RC.ProductBadge>{props.data.productTag}</RC.ProductBadge>
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
      {targetedProduct && <RC.CardOverlay />}
      <RC.ProductActionContainer show={targetedProduct}>
        <RC.ProductAddButton onClick={props.handleKartCreate} isWishListBtn={false}>{ (props.kartBtnClicked && targetedProduct)? <DualRingLoad /> : 'Add Cart' }</RC.ProductAddButton>
        <RC.ProductAddButton onClick={props.handleWishListCreate} isWishListBtn={true} >{ (props.wishBtnClicked && targetedProduct)? <DualRingLoad /> : 'WishList' }</RC.ProductAddButton>
      </RC.ProductActionContainer>
    </RC.ProductCardContainer>
  )
};
