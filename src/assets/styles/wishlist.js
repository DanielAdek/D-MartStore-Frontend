import Style from 'styled-components';

export const WishListWrapper = Style.div`
  background: #fff;
`;

export const WishListContainer = Style.div`
  width: 90%;
  margin-top: 30px;
  margin: 10px auto;
  max-height: 1200px;
  overflow-y: auto;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

export const WishListBtnTitle = Style.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WishListPageTitle = Style.div`
  font-weight: bolder;
  font-size: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: rgb(61, 70, 77);
`;

export const ButtonUploadToKart = Style.div`
  cursor: pointer;
  color:rgb(61,70,77);
  border-color: rgb(255,211,51);
  background: rgb(255,211,51);
  margin-left: 60px;
  text-align: center;
  font-weight: bolder;
  font-size: 17px;
  width: 20%;
  height: 43px;
  // &:hover {
  //   color: ${props => props.color};
  // }
`;

/* ========== WishList Component Section ====== */

export const WhishListTable = Style.table`
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

export const WhishListTableRow = Style.tr`
  box-sizing: border-box;
`;

export const WishListTableHeader = Style.th`
  border-top-left-radius: 2.5px;
  // border-left: 1px solid rgb(235, 235, 235);
  font-weight: bolder;
  font-size: 19px;
  background: rgb(247, 247, 247);
  padding: 12px;
  border: none;
  border-top: 1px solid rgb(235, 235, 235);
`;

export const WhishListTableDataImage = Style.td`
  border-left: 1px solid rgb(235, 235, 235);
  border-top: 1px solid rgb(235, 235, 235);
  padding: 10px;
`;

export const WhishListTableDataImageTag = Style.img`
  width: 80px;
`;

export const WhishListTableDataItemName = Style.td`
  padding:18px;
  border-top: 1px solid rgb(235, 235, 235);
`;

export const WhishListTableDataProName = Style.div`
  color: rgb(61, 70, 77);
  font-size: 20px;
`;

export const WishListRRDiv = Style.div`
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

export const WhishListTableDataSS = Style.td`
  padding: 12px 18px;
  border-top: 1px solid rgb(235, 235, 235);
`;

export const WhishListTableDataSSText = Style.div`
  color: #fff;
  font-weight: bold;
  width: 70px;
  border-radius: 1.5px;
  padding: 0.25em 0.5em;
  font-size: 75%;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  background-color: ${ props => props.stock === "In-Stock" ? "rgb(40, 167, 69)" : "#fccccc"};
  transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
`;

export const WhishListTableDataPrice = Style.td`
  // text-align: right;
  padding-left: 10px;
  font-weight: bold;
  color: #3d464d;
  border-top: 1px solid rgb(235, 235, 235);
`;

export const WhishListTableDataActionBtn = Style.td`
  padding-left: 60px;
  padding-right: 40px;
  padding-top: 18px;
  padding-bottom: 18px;
  white-space: nowrap;
  width: 1px;
  border-top: 1px solid rgb(235, 235, 235);
`;

export const WhishListTableActionBtn = Style.button`
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

export const WhishListTableDataDel = Style.td`
  padding: 18px;
  border-right: 1px solid rgb(235, 235, 235);
  width: 1px;
  border-top: 1px solid rgb(235, 235, 235);
`;

export const WhishListTableDataDelButton = Style.button`
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
