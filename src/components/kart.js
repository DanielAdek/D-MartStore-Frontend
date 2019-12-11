import React from 'react';
import * as RC from '../assets/styles/kart';

export const Karts = props => {
  return (
    <RC.KartTableRow>
      <RC.KartTableDataImage>
        <RC.KartTableDataImageTag src={props.data.product.productImages[0].image}/>
      </RC.KartTableDataImage>
      <RC.KartTableDataItemName>
        <RC.KartTableDataProName>{props.data.product.productName}</RC.KartTableDataProName>
      </RC.KartTableDataItemName>
      <RC.KartTableDataPrice>${props.data.product.productPrice}</RC.KartTableDataPrice>
      <RC.KartTableDataQty>
        <RC.ProductQtySection>
          <RC.ProductQtyInputDiv>
            <RC.ProductQtyInput>{props.currentFigure ? props.currentFigure[props.index][props.index] : 1}</RC.ProductQtyInput>
            <RC.ProductQtyButton onClick={event => props.handleQtyAmout(event, props.index)} posL="1px">-</RC.ProductQtyButton>
            <RC.ProductQtyButton onClick={event => props.handleQtyAmout(event, props.index)} posR="1px">+</RC.ProductQtyButton>
          </RC.ProductQtyInputDiv>
        </RC.ProductQtySection>
      </RC.KartTableDataQty>
      <RC.KartTableDataPrice>${props.currentFigure ? parseFloat(props.data.product.productPrice, 10) * parseFloat(props.currentFigure[props.index][props.index], 10) : '0.00'}</RC.KartTableDataPrice>
      <RC.KartTableDataDel>
        <RC.KartTableDataDelButton>x</RC.KartTableDataDelButton>
      </RC.KartTableDataDel>
    </RC.KartTableRow>
  )
}