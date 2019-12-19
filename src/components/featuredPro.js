import React from 'react';
import * as RC from '../assets/styles/featuredPro';

export const FeaturedProducts = props => {
  return (
    <RC.Card>
      <RC.CardImage src={props.data.productImages[0].image} alt="?" />
      <RC.CardDetailCont>
        <RC.CardDetails>{props.data.productCaptionHeading}</RC.CardDetails>
        <RC.ShowAll onClick={props.clicked}>Show All</RC.ShowAll>
      </RC.CardDetailCont>
    </RC.Card>
  )
}