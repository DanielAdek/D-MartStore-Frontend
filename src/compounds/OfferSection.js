import React from 'react';
import * as RC from '../assets/styles/offerSection';
import { OfferBox, OfferBox2 } from '../components/offers'
import { offerBoxData, imageBoxData } from '../assets/map.v';

export const OfferSection = () => {
  return <RC.OfferBoxesContainer>
           <OfferBox data={offerBoxData} />
         </RC.OfferBoxesContainer>
}

export const OfferSection2 = () => {
  return <RC.OfferBoxesContainer>
          <OfferBox2 images={imageBoxData} />
        </RC.OfferBoxesContainer>
}