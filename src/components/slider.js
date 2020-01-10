import React from 'react';
import Carousel from '@brainhubeu/react-carousel';

export const Slider = ({ infinit, children }) => {
  return infinit ?
  <Carousel
    arrows
    infinite
    slidesPerPage={5}
    slidesPerScroll={2}
    animationSpeed={5000}
    autoPlay={3000000}
    stopAutoPlayOnHover
    offset={50}
    itemWidth={350}>
      {children}
  </Carousel> : 
  <Carousel
    arrows
    offset={50}
    itemWidth={350}>
      {children}
  </Carousel>;
}