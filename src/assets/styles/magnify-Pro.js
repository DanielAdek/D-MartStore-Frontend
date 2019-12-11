import Style from 'styled-components';

/* =========== Modal Content ========= */

export const Body = Style.div`
  display: grid;
  grid-template-columns: 45% 55%;
  column-gap: 5px;
  width: 100%;
  margin-top: 30px;
`;

export const CloseBtn = Style.div`
  padding: 5px;
  font-size: 24px;
  color: $ccc;
  position: absolute;
  right: 15px;
  top: 10px;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;


export const ContentBody = Style.div`
  padding: 20px;
`;

export const ProductMagnifiedImageCont = Style.div`
  width: 98%;
  margin: 1px auto;
  height: 400px;
`;

export const ProductMagnifiedImage = Style.img``;

export const ProductRightSide = Style.div`
  width: 90%;
`;

export const ProductHeading = Style.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 18px;
`;

export const ProductRR = Style.div`
  margin-top: 6px;
  display: flex;
  align-items: center
  margin-bottom: 15px;
`;

export const ProductInfoRating = Style.div``;

export const StarSVG = Style.svg`
  width: 13px;
  height: 12px;
  vertical-align: baseline;
  color: ${ props => props.active ? '#ffd333' : 'rgb(204, 204, 204)'};
`;

export const ProductSVGPath = Style.path`
  fill: currentColor;
`;

export const ProductInfoReview = Style.div`
  margin-left: 9px;
  font-size: 13px;
  line-height: 1;
  color: rgb(179, 179, 179);
  padding-top: 1px;
`;

export const ProductDetails = Style.p`
  font-family: Roboto,"sans-serif";
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: #3d464d;
`;

export const ProductStatus = Style.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const ProductStatText = Style.span`
  color: #ccc;
  font-size: 15px;
  margin-right: 15px;
`;

export const ProductStatusColor = Style.span`
  color: ${props => props.statusText}
  font-size: 15px;
`;

export const ProductPrice = Style.span`
  font-weight: bold;
  font-size: 1.8rem;
  color: #495057;
`;

export const ProductActionsSection = Style.span`
  display: flex;
  margin-top: 20px;
`;

export const ProductQtySection = Style.div`
  display: flex;
  margin-right: 10px;
`;

export const ProductQtyInputDiv = Style.div`
  width: 120px;
  position: relative;
`;

export const ProductQtyInput = Style.input`
  display: block;
  width: 100%;
  min-width: 88px;
  padding: 0 24px 1px;
  text-align: center;
  font-weight: 400;
  background-color: #fff;
  border: 1px solid #ced4da;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  color: #495057;
  font-size: 1.25rem;
  border-radius: 2px;
  height: calc(2.75rem + 2px);
  line-height: 1.25;
  margin: 0;
  font-family: inherit;
`;

export const ProductQtyButton = Style.div`
  position: absolute;
  height: 100%;
  width: 24px;
  top: 0;
  cursor: pointer;
  opacity: .3;
  transition: opacity .18s;
  right: ${props => props.posR};
  left: ${props => props.posL}
  color: #3d464d;
  display: flex;
  justify-content: center;
  font-size: 24px;
`;

export const ProductActionButtonSec = Style.div`
  display: flex;
  justify-content: space-evenly;
  width: 35%;
`;

export const ProductActionButton = Style.div`
  background: ${props => props.bgColor}
  width: 100px;
  color: ${props => props.clr};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  &:hover {
    color: ${props => props.hClr};
  }
`;

export const ProductImagesContainer = Style.div`
  display: flex;
  width: 60%;
  height: 20%;
  overflow-x: auto
  margin-top: 20px;
`;

export const ProductImages = Style.img`
  width: 100px;
  box-sizing: border-box;
  border: 1px solid #f2f2f2;
  border-radius: 2px;
  margin-right: 4.5px;
  &:hover, &:active, &:focus {
    border-color: #ffd333;
    cursor: pointer;
  }
`;

/* ================ PATH ATTRIBUTES FOR SVGs ============= */

// Rating
export const StarAttrArea = "M7,0.3L9,4h3.5c0.4,0.1,0.6,0.8,0.3,1.1L10,7.4l1,4c0.1,0.4-0.4,0.8-0.8,0.6L6.5,10l-3.7,1.9c-0.4,0.2-0.9-0.1-0.8-0.6l1-4 L0.2,5.1C-0.2,4.8,0,4.1,0.5,4H4l2-3.7C6.2-0.1,6.8-0.1,7,0.3z";
export const StarAttrPerimeter = "M6.5,1.5l1.6,3L8.4,5H9h2.4l-2,1.6L8.9,7L9,7.6l0.7,3L7,9.1L6.5,8.9L6,9.1l-2.8,1.5l0.7-3L4.1,7L3.6,6.6L1.6,5 H4h0.6l0.3-0.5L6.5,1.5 M6.5,0C6.3,0,6.1,0.1,6,0.3L4,4H0.5C0,4.1-0.2,4.8,0.2,5.1L3,7.4l-1,4C1.9,11.7,2.2,12,2.5,12 c0.1,0,0.2,0,0.3-0.1L6.5,10l3.7,1.9c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.6-0.3,0.5-0.6l-1-4l2.8-2.3c0.3-0.3,0.1-1-0.3-1.1H9L7,0.3 C6.9,0.1,6.7,0,6.5,0L6.5,0z";
