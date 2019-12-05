import Style from 'styled-components';

export const PanelCover = Style.div`
  height: 54px;
  background: coral;
  box-shadow: 0 1px rgba(0,0,0,.04), inset 0 -1px rgba(0,0,0,.04);
  color: #3d464d;
`;

export const PanelContainer = Style.div`
  margin-right: auto;
  margin-left: auto;
  width: 90%;
`;

export const PanelFlex = Style.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
`;

export const PanelCatCover = Style.div`
  background: #3d464d;
  width: 22%;
  height: ${props => props.grow ? '450px' : '0px'};
  transition: height 0.2s ease 0s, transform 0.2s ease 0s, -webkit-transform 0.2s ease 0s;
  padding-top: 42px;
  position: absolute;
  box-shadow: none;
  top: 7px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  z-index: 5;
`;

export const PanelCatHeading = Style.button`
  color: #fff;
  position: absolute;
  z-index: 1;
  width: 90%;
  font-weight: 500;
  border-width: initial;
  border-style: none;
  background: transparent;
  padding: 0px;
  font-size: 1.14rem;
  top: 7px;
  left: 16px;
  display: flex;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

export const PanelSVGCat = Style.svg`
  width: 18px;
  height: 14px;
  color: rgb(133, 155, 166);
  margin-right: 10px;
`;

export const PanelSVGCatArr = Style.svg`
  width: 10px;
  height: 6px;
  fill: rgb(133, 155, 166);
  position: absolute;
  right: 15px;
  top: 10px;
  transition: fill 0.2s ease 0s, transform 0.2s ease 0s, -webkit-transform 0.2s ease 0s;
  transform: ${props => props.click ? 'rotate(0deg)' : 'rotate(180deg)'};
`;

export const PanelSVGPath = Style.path`
  fill: currentColor;
`;

export const PanelCatListContainer = Style.div`
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
  padding: 5px;
  margin-left: 10px;
  margin-top: 5px;
`;

export const PanelCatListItem = Style.div`
  color: #fff;
  font-size: 1.15rem;
  letter-spacing: 0.02em;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
    color: #859ba6;
  }
`;


export const PanelLinksCover = Style.div`
  margin-left: 18px;
  position: absolute;
  right: 198px;
  width: 60%;
  top: 13px;
`;

export const PanelLinkUl = Style.ul`
  height: inherit;
  z-index: 10;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 19px;
  color: #333;
  font-weight: 700;
`;

export const PanelLinKLi = Style.li`
  margin-right: 68px;
`;

export const PanelIndicatorCover = Style.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  right: 50px;
  top: 13px;
  width: 100px;
`;


export const PanelKartCountainer = Style.div`
`;

export const PanelWLCountainer = Style.div`
`;

export const PanelSVGKW = Style.svg`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const PanelKartSVGCircl = Style.circle``;

export const PanelWLKCount = Style.span`
  height: 15px;
  font-size: 10px;
  position: relative;
  top: -9px;
  right: 5px;
  color: blue;
  font-weight: 800;
  padding: 0px 3px;
  border-radius: 1000px;
  background: rgb(255, 255, 255);
  cursor: pointer;
`;

//=========== SVG data ============= //


export const categoryAttrSVG = "M-0.000,8.000 L-0.000,6.000 L18.000,6.000 L18.000,8.000 L-0.000,8.000 ZM-0.000,-0.000 L18.000,-0.000 L18.000,2.000 L-0.000,2.000 L-0.000,-0.000 ZM14.000,14.000 L-0.000,14.000 L-0.000,12.000 L14.000,12.000 L14.000,14.000 Z";

export const categoryArrowAttrSVG = "M0.2,0.4c0.4-0.4,1-0.5,1.4-0.1l2.9,3l2.9-3c0.4-0.4,1.1-0.4,1.4,0.1c0.3,0.4,0.3,0.9-0.1,1.3L4.5,6L0.3,1.6C-0.1,1.3-0.1,0.7,0.2,0.4z";

export const wishListSVGAttr = "M14,3c2.2,0,4,1.8,4,4c0,4-5.2,10-8,10S2,11,2,7c0-2.2,1.8-4,4-4c1,0,1.9,0.4,2.7,1L10,5.2L11.3,4C12.1,3.4,13,3,14,3 M14,1 c-1.5,0-2.9,0.6-4,1.5C8.9,1.6,7.5,1,6,1C2.7,1,0,3.7,0,7c0,5,6,12,10,12s10-7,10-12C20,3.7,17.3,1,14,1L14,1z";

export const kartSVGAttr = "M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6 V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4 C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z";