import React from 'react';
import * as RC from '../assets/styles/wishlist';
import { ProductData } from '../assets/map.v';

export const Whishlist = props => {
  return (
    <RC.WhishListTable>
      <RC.WhishListTableRow>
        <RC.WishListTableHeader>Image</RC.WishListTableHeader>
        <RC.WishListTableHeader>Product</RC.WishListTableHeader>
        <RC.WishListTableHeader>Stock</RC.WishListTableHeader>
        <RC.WishListTableHeader>Price</RC.WishListTableHeader>
        <RC.WishListTableHeader>&nbsp;</RC.WishListTableHeader>
        <RC.WishListTableHeader>&nbsp;</RC.WishListTableHeader>
      </RC.WhishListTableRow>
    { ProductData.map((data, index) => (
      <RC.WhishListTableRow key={index}>
        <RC.WhishListTableDataImage>
          <RC.WhishListTableDataImageTag src={data.product.productImages[0].image}/>
        </RC.WhishListTableDataImage>
        <RC.WhishListTableDataItemName>
          <RC.WhishListTableDataProName>{data.product.productName}</RC.WhishListTableDataProName>
          <RC.WishListRRDiv>
            <RC.StarSVG>
              <RC.ProductSVGPath d={RC.StarAttrArea}></RC.ProductSVGPath>
              <RC.ProductSVGPath d={RC.StarAttrPerimeter}></RC.ProductSVGPath>
            </RC.StarSVG>
            <RC.ProductInfoReview>{data.product.productRating} Reviews</RC.ProductInfoReview>
          </RC.WishListRRDiv>
        </RC.WhishListTableDataItemName>
        <RC.WhishListTableDataSS>
          <RC.WhishListTableDataSSText stock={data.product.productAvailablility}>{data.product.productAvailablility}</RC.WhishListTableDataSSText>
        </RC.WhishListTableDataSS>
        <RC.WhishListTableDataPrice>${data.product.productPrice}</RC.WhishListTableDataPrice>
        <RC.WhishListTableDataActionBtn>
          <RC.WhishListTableActionBtn className="btn btn-md">Add Cart</RC.WhishListTableActionBtn>
        </RC.WhishListTableDataActionBtn>
        <RC.WhishListTableDataDel>
          <RC.WhishListTableDataDelButton>x</RC.WhishListTableDataDelButton>
        </RC.WhishListTableDataDel>
      </RC.WhishListTableRow>
      ))}
    </RC.WhishListTable>
  )
}