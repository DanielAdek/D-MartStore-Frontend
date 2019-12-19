import React from 'react';
import * as RC from '../assets/styles/offers';

export const OfferBox = props => {
  return props.data.map((data, i) => (
    <RC.OfferContainer key={i}>
     <RC.OfferIcon src={data.image}/>
      <RC.OfferDetails>
        <RC.OfferDetailTitle>{data.dTitle}</RC.OfferDetailTitle>
        <RC.OfferDetailText>{data.dText}</RC.OfferDetailText>
      </RC.OfferDetails>
    </RC.OfferContainer>
  ));
}

export const OfferBox2 = ({ images }) => (
  images.map((image, i) => (
    <RC.OfferSection2Images key={i} src={image.source} alt={images.alt} />
  ))
);