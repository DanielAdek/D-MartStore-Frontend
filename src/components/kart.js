import React, { Fragment } from 'react';
import * as RC from '../assets/styles/kart';

export const Karts = props => {
  const quantity = props.currentData ? (props.currentData.length && props.currentData[props.index].quantity) : 1;
  return (
    <Fragment>
      {
        props.currentData &&
        <RC.KartTableRow>
          <RC.KartTableDataImage>
            <RC.KartTableDataImageTag src={props.data.productId && props.data.productId.productImages[props.data.imageType - 1] && props.data.productId.productImages[props.data.imageType - 1].image}/>
          </RC.KartTableDataImage>
          <RC.KartTableDataItemName>
            <RC.KartTableDataProName>{props.data.productId.productName}</RC.KartTableDataProName>
          </RC.KartTableDataItemName>
          <RC.KartTableDataPrice>${props.data.productId.productPrice}</RC.KartTableDataPrice>
          <RC.KartTableDataQty>
            <RC.ProductQtySection>
              <RC.ProductQtyInputDiv>
                <RC.ProductQtyInput>{quantity}</RC.ProductQtyInput>
                <RC.ProductQtyButton onClick={event => props.handleQtyAmout(event, props.index)} posL="1px">-</RC.ProductQtyButton>
                <RC.ProductQtyButton onClick={event => props.handleQtyAmout(event, props.index)} posR="1px">+</RC.ProductQtyButton>
              </RC.ProductQtyInputDiv>
            </RC.ProductQtySection>
          </RC.KartTableDataQty>
          <RC.KartTableDataPrice>${props.currentData ? (parseFloat(props.data.productId.productPrice, 10) * parseFloat(quantity, 10)).toFixed(2) : '0.00'}</RC.KartTableDataPrice>
          <RC.KartTableDataDel>
            <RC.KartTableDataDelButton onClick={props.handleDelKart}>x</RC.KartTableDataDelButton>
          </RC.KartTableDataDel>
        </RC.KartTableRow>
      }
    </Fragment>
  )
}