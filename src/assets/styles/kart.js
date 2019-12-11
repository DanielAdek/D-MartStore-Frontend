import Style from 'styled-components';

export const KartWrapper = Style.div`
  background: #fff;
`;

export const KartContainer = Style.div`
  width: 90%;
  margin-top: 30px;
  margin: 10px auto;
  max-height: 1200px;
  overflow-y: auto;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

export const KartTopSection = Style.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const KartPageTitle = Style.div`
  font-weight: bolder;
  font-size: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: rgb(61, 70, 77);
`;

export const KartTopButtonSection = Style.div`
  display: flex;
  justify-content: space-between;
  width: 40%
`;

export const KartTopButtons = Style.div`
  cursor: pointer;
  color: ${props => props.color};
  border-color: ${props => props.bClr};
  background: ${props => props.bgColor};
  margin-left: 60px;
  text-align: center;
  font-weight: bolder;
  font-size: 17px;
  width: 40%;
  &:hover {
    color: ${props => props.color};
  }
`;

export const KartTable = Style.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px;
  border-color: grey;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(61, 70, 77);
`;

export const KartTableRow = Style.tr`
  box-sizing: border-box;
`;

export const KartTableHeader = Style.th`
  border-top-left-radius: 2.5px;
  // border-left: 1px solid rgb(235, 235, 235);
  font-weight: bolder;
  font-size: 19px;
  background: rgb(247, 247, 247);
  padding: 12px;
  border: none;
  border-top: 1px solid rgb(235, 235, 235);
`;

/* ========== Kart Component Section ====== */

export const KartTableDataImage = Style.td`
  border-left: 1px solid rgb(235, 235, 235);
  border-top: 1px solid rgb(235, 235, 235);
  padding: 10px;
`;

export const KartTableDataImageTag = Style.img`
  width: 80px;
`;

export const KartTableDataItemName = Style.td`
  padding:18px;
  border-top: 1px solid rgb(235, 235, 235);
`;
  
  export const KartTableDataProName = Style.div`
  color: #7083ec;
  // color: rgb(61, 70, 77);
  font-size: 20px;
`;

export const KartRRDiv = Style.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
`;

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


export const KartTableDataPrice = Style.td`
  // text-align: right;
  padding-left: 10px;
  font-weight: bold;
  color: #3d464d;
  border-top: 1px solid rgb(235, 235, 235);
`;

export const KartTableDataQty = Style.td`
  padding: 12px 18px;
  border-top: 1px solid rgb(235, 235, 235);
`;

export const ProductQtySection = Style.div`
  display: flex;
  margin-right: 10px;
`;

export const ProductQtyInputDiv = Style.div`
  width: 120px;
  position: relative;
`;

export const ProductQtyInput = Style.div`
  background-color: #fff;
  border: 1px solid #ced4da;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  color: #495057;
  font-size: 1.25rem;
  border-radius: 2px;
  height: calc(2.75rem + 2px);
  display: flex;
  justify-content: center;
  align-items: center;
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

export const KartTableDataActionBtn = Style.td`
  padding-left: 60px;
  padding-right: 40px;
  padding-top: 18px;
  padding-bottom: 18px;
  white-space: nowrap;
  width: 1px;
  border-top: 1px solid rgb(235, 235, 235);
`;

export const KartTableActionBtn = Style.button`
  color: rgb(61, 70, 77);
  fill: rgb(61, 70, 77);
  border-color: rgb(255, 211, 51);
  background: rgb(255, 211, 51);
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: rgb(61, 70, 77);
    border-color: rgb(61, 70, 77);
    color: #fff;
  }
`;

export const KartTableDataDel = Style.td`
  padding: 18px;
  border-right: 1px solid rgb(235, 235, 235);
  width: 1px;
  border-top: 1px solid rgb(235, 235, 235);
`;

export const KartTableDataDelButton = Style.button`
  border: none;
  background: transparent;
  font-size: 24px;
  color: #ccc;
  &:hover {
    color: red;
  }
  &:focus {
    outline: none;
  }
`;

/* ================ PATH ATTRIBUTES FOR SVGs ============= */

// Rating
export const StarAttrArea = "M7,0.3L9,4h3.5c0.4,0.1,0.6,0.8,0.3,1.1L10,7.4l1,4c0.1,0.4-0.4,0.8-0.8,0.6L6.5,10l-3.7,1.9c-0.4,0.2-0.9-0.1-0.8-0.6l1-4 L0.2,5.1C-0.2,4.8,0,4.1,0.5,4H4l2-3.7C6.2-0.1,6.8-0.1,7,0.3z";
export const StarAttrPerimeter = "M6.5,1.5l1.6,3L8.4,5H9h2.4l-2,1.6L8.9,7L9,7.6l0.7,3L7,9.1L6.5,8.9L6,9.1l-2.8,1.5l0.7-3L4.1,7L3.6,6.6L1.6,5 H4h0.6l0.3-0.5L6.5,1.5 M6.5,0C6.3,0,6.1,0.1,6,0.3L4,4H0.5C0,4.1-0.2,4.8,0.2,5.1L3,7.4l-1,4C1.9,11.7,2.2,12,2.5,12 c0.1,0,0.2,0,0.3-0.1L6.5,10l3.7,1.9c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.6-0.3,0.5-0.6l-1-4l2.8-2.3c0.3-0.3,0.1-1-0.3-1.1H9L7,0.3 C6.9,0.1,6.7,0,6.5,0L6.5,0z";
