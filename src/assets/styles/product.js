import Style from 'styled-components';

export const ProductCardContainer = Style.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1px;
  outline: none;
  // width: 280px;
  border: 1px solid #f0f0f0;
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
  &:hover {
    border: 1px solid #ffd333;
  }
`;

export const ProductImageCont = Style.div`
  padding: 18px 18px 20px;
  flex-shrink: 0;
`;

export const ProductImage = Style.img`
  max-width: 100%;
  height: 250px;
  display: block;
`;

export const ProductMagnifyIcon = Style.button`
  z-index: 5;
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 10px;
  cursor: pointer;
  color: #ccc;
  border-style: none;
  padding: 7px;
  &:hover {
    background: #ffd333;
    color: #333;
  }
`;

export const ProductMagnifySVG = Style.svg`
  width: 1rem;
  height: 1rem;
`;

export const ProductSVGTitle = Style.title``;

export const ProductSVGPath = Style.path`
  fill: currentColor;
`;

export const ProductBadge = Style.div`
  top: 18px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  left: 18px;

  color: rgb(255, 255, 255);
  background: rgb(51, 119, 255);
  font-size: 11px;
  letter-spacing: 0.02em;
  line-height: 1;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 4px;
  border-radius: 1.5px;
  padding: 5px 8px 4px;
`;

export const ProductInfoCont = Style.div`
  padding: 0px 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductInfoTitle = Style.div`
  font-size: 15px;
  line-height: 19px;
  transition: all 0.15s ease 0s;
  &:hover {
    color: rgb(26, 102, 255);
    cursor: pointer;
  }
`;

export const ProductInfoRRCont = Style.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
`;

export const ProductInfoRating = Style.div``;

export const StarSVG = Style.svg`
  width: 13px;
  height: 12px;
  vertical-align: baseline;
  color: ${ props => props.active ? '#ffd333' : 'rgb(204, 204, 204)'};
`;

export const ProductInfoReview = Style.div`
  margin-left: 9px;
  font-size: 13px;
  line-height: 1;
  color: rgb(179, 179, 179);
  padding-top: 1px;
`;

export const ProductInfoPrice = Style.div`
  margin-top: 14px;
  line-height: 1;
  font-weight: 700;
  color: blue;
`;

export const ProductActionContainer = Style.div`
  display: ${props => props.show ? 'flex': 'none'};
  flex-direction: column;
  position: absolute;
  top: 35%;
  left: 25%;
  z-index: 4;
  width: 50%;
`;

export const CardOverlay = Style.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: rgba(0, 0, 0, 0.2);
`;

export const ProductAddButton = Style.button`
  font-size: 0.875rem;
  line-height: 1.25;
  font-weight: 700;
  padding: 0.375rem 1rem;
  border-color: ${ props => props.isWishListBtn ? '#0101d8' : '#ffd333'} 
  background: ${ props => props.isWishListBtn ? '#0101d8' : '#ffd333'} 
  color: ${ props => props.isWishListBtn ? '#fff' : '#3d464d'} 
  margin-top: 15px;
  font-family: Rubik;
  max-height: 35px;
`;



/* ================ PATH ATTRIBUTES FOR SVGs ============= */

// Rating
export const StarAttrArea = "M7,0.3L9,4h3.5c0.4,0.1,0.6,0.8,0.3,1.1L10,7.4l1,4c0.1,0.4-0.4,0.8-0.8,0.6L6.5,10l-3.7,1.9c-0.4,0.2-0.9-0.1-0.8-0.6l1-4 L0.2,5.1C-0.2,4.8,0,4.1,0.5,4H4l2-3.7C6.2-0.1,6.8-0.1,7,0.3z";
export const StarAttrPerimeter = "M6.5,1.5l1.6,3L8.4,5H9h2.4l-2,1.6L8.9,7L9,7.6l0.7,3L7,9.1L6.5,8.9L6,9.1l-2.8,1.5l0.7-3L4.1,7L3.6,6.6L1.6,5 H4h0.6l0.3-0.5L6.5,1.5 M6.5,0C6.3,0,6.1,0.1,6,0.3L4,4H0.5C0,4.1-0.2,4.8,0.2,5.1L3,7.4l-1,4C1.9,11.7,2.2,12,2.5,12 c0.1,0,0.2,0,0.3-0.1L6.5,10l3.7,1.9c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.6-0.3,0.5-0.6l-1-4l2.8-2.3c0.3-0.3,0.1-1-0.3-1.1H9L7,0.3 C6.9,0.1,6.7,0,6.5,0L6.5,0z";

// Magnify Icon
export const MagnifyAttrD = "M14,15h-4v-2h3v-3h2v4C15,14.6,14.6,15,14,15z M13,3h-3V1h4c0.6,0,1,0.4,1,1v4h-2V3z M6,3H3v3H1V2c0-0.6,0.4-1,1-1h4V3z  M3,13h3v2H2c-0.6,0-1-0.4-1-1v-4h2V13z";
