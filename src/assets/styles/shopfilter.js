import Style from 'styled-components';

export const ShopFilterSection = Style.div`
  border: .1px solid #f0f0f0;
  height: 810px;
  max-height: 810px;
`;

export const ShopFilterOptionBoxes = Style.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: 0.1rem solid #f0f0f0;
  font-size: 20px
  font-weight: 500;
`;

export const ShopFilterOptionHeadings = Style.h4`
  font-size: 1.2rem;
`;

export const ShopFilterByBrandsCover = Style.label`
  padding: 1px 3px;
  cursor: pointer;
  display: flex;
  margin: 8px 0;
  flex-direction: column;
  height: 150px;
  overflow-y: auto;
`;

export const ShopFilterByBrandRadioCover = Style.span`
  margin-right: 7px;
`;

export const ShopFilterByBrandRadio = Style.input`
  box-sizing: border-box;
  padding: 0;
`;

export const ShopFilterByBrandRadioText = Style.span`
  font-size: 1.1rem;
  margin-left: 10px;
  font-family: Roboto,"sans-serif";
`;

export const ShopFilterByPriceCover = Style.div`
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const ShopFilterByPriceTextCover = Style.div`
  display: flex;
  margin-top: 20px;
`;

export const ShopFilterByPriceText = Style.div`
  color: #999;
  font-weight: 600;
  margin-right: 5px;
  font-family: Rubik,Roboto,"sans-serif";
  font-size: 1.1rem;
`;

export const ShopFilterByColorCover = Style.div`
  padding: 2px 0;
  display: flex;
  flex-wrap: wrap;
  margin: -1px;
`;

export const ShopFilterByColorBodyLabel = Style.label`
  height: 22px;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const ShopFilterByColorCheckBox = Style.input`
  position: absolute;
  opacity: 0;
  &:checked {
    background-color:#2196F3;
    display: block;
  }
`;

export const ShopFilterByColorSpan = Style.span`
  border-radius: 5px;
  background: ${props => props.color}
  box-shadow: ${props => (props.color === "#fff" || props.color === "#ffffff" || props.color === "white" ) ? 'inset 0 0 0 2px #d9d9d9' : 'none' };
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  &:after {
    content: "";
    color: #ccc;
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid ${props => (props.color === "#fff" || props.color === "#ffffff" || props.color === "white" || props.color === '#f8f9fa' ) ? '#ccc' : '#fff' };
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;


export const ShopFilterButtonSection = Style.div`
  padding-top: 24px;
  padding-bottom: 16px;
  display: flex;
`;

export const ShopFilterButton = Style.button`
  background: ${props => props.bclr}
  color: #3d464d;
  cursor: pointer
  margin-right: 10px;
  width: 30%;
`;