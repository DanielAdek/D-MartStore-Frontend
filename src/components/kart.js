import React from 'react';
import * as RC from '../assets/styles/kart';

export const Karts = props => {
  return (
    <RC.KartTableRow>
      <RC.KartTableDataImage>
        <RC.KartTableDataImageTag src={props.data.productId.productImages[props.data.imageType - 1].image}/>
      </RC.KartTableDataImage>
      <RC.KartTableDataItemName>
        <RC.KartTableDataProName>{props.data.productId.productName}</RC.KartTableDataProName>
      </RC.KartTableDataItemName>
      <RC.KartTableDataPrice>${props.data.productId.productPrice}</RC.KartTableDataPrice>
      <RC.KartTableDataQty>
        <RC.ProductQtySection>
          <RC.ProductQtyInputDiv>
            <RC.ProductQtyInput>{props.currentData ? props.currentData[props.index].quantity : 1}</RC.ProductQtyInput>
            <RC.ProductQtyButton onClick={event => props.handleQtyAmout(event, props.index)} posL="1px">-</RC.ProductQtyButton>
            <RC.ProductQtyButton onClick={event => props.handleQtyAmout(event, props.index)} posR="1px">+</RC.ProductQtyButton>
          </RC.ProductQtyInputDiv>
        </RC.ProductQtySection>
      </RC.KartTableDataQty>
      <RC.KartTableDataPrice>${props.currentData ? parseFloat(props.data.productId.productPrice, 10) * parseFloat(props.currentData[props.index].quantity, 10) : '0.00'}</RC.KartTableDataPrice>
      <RC.KartTableDataDel>
        <RC.KartTableDataDelButton onClick={props.handleDelKart}>x</RC.KartTableDataDelButton>
      </RC.KartTableDataDel>
    </RC.KartTableRow>
  )
}