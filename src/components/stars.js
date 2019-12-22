import React from 'react';
import { Alias } from '../importer';

const Icon = Alias.pathToSyles('star');


export const yellowStars = ratings => {
  // Get actual figure for amout of stars to color
  const actualRating = ratings === 5 ? 5 : 5 - ratings;
  // Init array
  const colorsArray = [];
  // loop to fill array
  for(let i=0; i < actualRating; i++) {
    colorsArray.push(i);
  }
  // Return JSX of yellow stars
  return colorsArray.map(data => (
    <Icon.StarSVG key={data} active={true}>
      <Icon.ProductSVGPath d={Icon.StarAttrArea}></Icon.ProductSVGPath>
      <Icon.ProductSVGPath d={Icon.StarAttrPerimeter}></Icon.ProductSVGPath>
    </Icon.StarSVG>
  ))
}

export const greyStars = ratings => {
  // Get actual figure for amout of stars to color
  const actualRating = 5 - ratings;
  // Init array
  const colorsArray = [];
  // loop to fill array
  for(let i=0; i < actualRating; i++) {
    colorsArray.push(i);
  }
  // Return JSX of grey stars
  return colorsArray.map(data => (
    <Icon.StarSVG key={data}>
      <Icon.ProductSVGPath d={Icon.StarAttrArea}></Icon.ProductSVGPath>
      <Icon.ProductSVGPath d={Icon.StarAttrPerimeter}></Icon.ProductSVGPath>
    </Icon.StarSVG>
  ))
}


export const calculateFrequency = arr => {
  return Math.floor(arr.reduce((a, c) => a += c.rating, 0) / arr.filter(data => data.rating !== 0).length);
}