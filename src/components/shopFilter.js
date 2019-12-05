import React, { useState } from 'react';
import InputRange from 'react-input-range';
import * as RC from '../assets/styles/shopfilter';
import { ProductData, Colors } from '../assets/map.v';
import "react-input-range/lib/css/index.css"

export const ShopFilter = () => {
  const brands = {};
  ProductData.forEach(data => brands[data.product.productBrand] = data.product.productBrand);
  const [currentPrice, setCurrentPrices] = useState({ min: 200, max: 750 });

  return (
      <RC.ShopFilterSection>
        <RC.ShopFilterOptionBoxes>Filter</RC.ShopFilterOptionBoxes>
        {/* Brands section */}
        <RC.ShopFilterOptionBoxes>
          <RC.ShopFilterOptionHeadings>By Brand</RC.ShopFilterOptionHeadings>
          <RC.ShopFilterByBrandsCover>
          {Object.keys(brands).map((data, i) => 
            <RC.ShopFilterByBrandRadioCover key={i}>
              <RC.ShopFilterByBrandRadio type="radio" name="brand"/>
              <RC.ShopFilterByBrandRadioText>{data}</RC.ShopFilterByBrandRadioText>
            </RC.ShopFilterByBrandRadioCover>)}
          </RC.ShopFilterByBrandsCover>
        </RC.ShopFilterOptionBoxes>
        {/* Price Range Section */}
        <RC.ShopFilterOptionBoxes>
          <RC.ShopFilterOptionHeadings>By Price</RC.ShopFilterOptionHeadings>
          <RC.ShopFilterByPriceCover>
            <InputRange
              minValue={100}
              maxValue={1000}
              value={currentPrice}
              formatLabel={value => `$${value}`}
              onChange={val => setCurrentPrices(val)} />
              <RC.ShopFilterByPriceTextCover>
                <RC.ShopFilterByPriceText style={{marginRight:"10px"}}>Prices:</RC.ShopFilterByPriceText>
                <RC.ShopFilterByPriceText>${currentPrice.min}.00 - </RC.ShopFilterByPriceText>
                <RC.ShopFilterByPriceText>${currentPrice.max}.00</RC.ShopFilterByPriceText>
              </RC.ShopFilterByPriceTextCover>
          </RC.ShopFilterByPriceCover>
        </RC.ShopFilterOptionBoxes>
        {/* Color section */}
        <RC.ShopFilterOptionBoxes>
          <RC.ShopFilterOptionHeadings>By Colors</RC.ShopFilterOptionHeadings>
          <RC.ShopFilterByColorCover>
           {Colors.map((color, index) => (
            <RC.ShopFilterByColorBodyLabel key={index}>
              <RC.ShopFilterByColorCheckBox type="checkbox"/>
              <RC.ShopFilterByColorSpan color={color}></RC.ShopFilterByColorSpan>
            </RC.ShopFilterByColorBodyLabel>))}
          </RC.ShopFilterByColorCover>
        </RC.ShopFilterOptionBoxes>
        {/* Search or Reset Button Section */}
        <RC.ShopFilterOptionBoxes>
          <RC.ShopFilterOptionHeadings>Search</RC.ShopFilterOptionHeadings>
          <RC.ShopFilterButtonSection>
            <RC.ShopFilterButton className="btn" bclr="#ffd333">Filter</RC.ShopFilterButton>
            <RC.ShopFilterButton className="btn" bclr="#f0f0f0">Reset</RC.ShopFilterButton>
          </RC.ShopFilterButtonSection>
        </RC.ShopFilterOptionBoxes>
        {/* *************** */}
      </RC.ShopFilterSection>
  )
}