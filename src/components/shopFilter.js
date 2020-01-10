import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css"
import { Alias } from '../importer';

const RC = Alias.pathToSyles('shopfilter')
const { Colors } = Alias.pathToAssets('map.v');
const { removeDuplicateFromArray } = Alias.pathToUtils('helpers');
const { requestProductsByFilter } = Alias.pathToActions('ProductCRUD');

export const ShopFilter = () => {
  // Redux Hooks
  const dispatch = useDispatch();
  const filterProduct = useSelector(state => state.ProductCRUD.products)

  // React Hooks
  const [queryData, setQueryData] = useState({});
  const [prices, setPrices] = useState({ min: 1, max: 2000 });
  const [colors, setColors] = useState([]);
  const [productBrands, setProductBrands] = useState(null);
  const [productColors, setProductColors] = useState(null);

  useEffect(() => {
    const prices = filterProduct && filterProduct.products.map(data => data.productPrice);
    const minPrice = filterProduct && Math.min(...prices);
    const maxPrice = filterProduct && Math.max(...prices);
    setPrices({ min: minPrice === Infinity ? 0 : minPrice, max: maxPrice === Infinity ? 0 : maxPrice} || { min: 1, max: 2000 });
  }, [filterProduct])

  useEffect(() => {
    const productsBrands = filterProduct && filterProduct.products.map(data => data.productBrand);
    const productsColors = filterProduct && filterProduct.products.map(data => data.productColor);
    setProductBrands(filterProduct && removeDuplicateFromArray(productsBrands));
    setProductColors(filterProduct && removeDuplicateFromArray(productsColors));
  }, [filterProduct])

  const handleBrandChange = data => setQueryData({ ...queryData, productBrand: data });

  const handleColorsPicked = event => {
    // copy state
    const newColors = colors.slice();

    // find matching value
    const foundColor = colors.filter(data => data === event.target.value).length < 1;

    if (foundColor) {
      // if not matching values then push
      newColors.push(event.target.value)
    } else {
      // find duplicate value
      newColors.forEach((data, index) => {
        if (data === event.target.value) {
          // if duplicate value then delete
          newColors.splice(index, 1);
        }
      })
    }
    setColors(newColors)
  }

  const handleFilter = () => {
    const qData = { ...queryData, productColors: colors, productPrices: prices};
    dispatch(requestProductsByFilter(qData));
  }

  // const handleReset = () => {
  //   dispatch(resetProductsByFilter());
  // }

  return (
      <RC.ShopFilterSection>
        <RC.ShopFilterOptionBoxes>Filter</RC.ShopFilterOptionBoxes>
        {/* Brands section */}
        <RC.ShopFilterOptionBoxes>
          <RC.ShopFilterOptionHeadings>By Brand</RC.ShopFilterOptionHeadings>
          <RC.ShopBrandContainer>
          {productBrands && productBrands.map((data, i) => 
          <RC.ShopFilterByBrandsCover>
            <RC.ShopFilterByBrandRadioCover key={i}>
              <RC.ShopFilterByBrandRadio type="radio" name="brand" onChange={() => handleBrandChange(data)}/>
              <RC.ShopFilterByBrandRadioText>{data}</RC.ShopFilterByBrandRadioText>
            </RC.ShopFilterByBrandRadioCover>
          </RC.ShopFilterByBrandsCover>)}
          </RC.ShopBrandContainer>
        </RC.ShopFilterOptionBoxes>
        {/* Price Range Section */}
        <RC.ShopFilterOptionBoxes>
          <RC.ShopFilterOptionHeadings>By Price</RC.ShopFilterOptionHeadings>
          { filterProduct && 
            <RC.ShopFilterByPriceCover>
              <InputRange
                  minValue={100}
                  maxValue={1000}
                  value={prices}
                  formatLabel={value => `$${value}`}
                  onChange={val => setPrices({ ...val, modifield: true})} />
                <RC.ShopFilterByPriceTextCover>
                  <RC.ShopFilterByPriceText style={{marginRight:"10px"}}>Prices:</RC.ShopFilterByPriceText>
                  <RC.ShopFilterByPriceText>${prices.min} - </RC.ShopFilterByPriceText>
                  <RC.ShopFilterByPriceText>${prices.max}</RC.ShopFilterByPriceText>
                </RC.ShopFilterByPriceTextCover>
            </RC.ShopFilterByPriceCover>
          }
        </RC.ShopFilterOptionBoxes>
        {/* Color section */}
        <RC.ShopFilterOptionBoxes>
          <RC.ShopFilterOptionHeadings>By Colors</RC.ShopFilterOptionHeadings>
          <RC.ShopFilterByColorCover>
           {((productColors && productColors.map(data => data)) || Colors).map((color, index) => (
            <RC.ShopFilterByColorBodyLabel key={index}>
              <RC.ShopFilterByColorCheckBox onChange={handleColorsPicked} value={color} type="checkbox" />
              <RC.ShopFilterByColorSpan color={color}></RC.ShopFilterByColorSpan>
            </RC.ShopFilterByColorBodyLabel>))}
          </RC.ShopFilterByColorCover>
        </RC.ShopFilterOptionBoxes>
        {/* Search or Reset Button Section */}
        <RC.ShopFilterOptionBoxes>
          <RC.ShopFilterOptionHeadings>Search</RC.ShopFilterOptionHeadings>
          <RC.ShopFilterButtonSection>
            <RC.ShopFilterButton onClick={handleFilter} className="btn btn-lg" bclr="#ffd333">Filter</RC.ShopFilterButton>
            {/* <RC.ShopFilterButton onClick={handleReset} className="btn" bclr="#f0f0f0">Reset</RC.ShopFilterButton> */}
          </RC.ShopFilterButtonSection>
        </RC.ShopFilterOptionBoxes>
        {/* *************** */}
      </RC.ShopFilterSection>
  )
}