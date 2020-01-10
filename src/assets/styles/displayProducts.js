import Style from 'styled-components';

export const DisplayHeadingContainer = Style.div`
  display: flex;
  margin: 11.4px auto;
  width: 90%;
`;

export const DisplayHeadingTitle = Style.div`
  font-weight: 700;
  font-size: 20px;
  font-family: Roboto, sans-serif;
  color: rgb(61, 70, 77);
`;

export const DisplayHorizontalLine = Style.div`
  height: 2px;
  background: rgb(235, 235, 235);
  width: 69%;
`;

export const DisplaySubNavContainer = Style.div`
  display: flex;
  justify-content: space-between;
  width: 81%;
  align-items: center;
  margin-left: 25px;
`;

export const DisplaySubNav = Style.div`
  cursor: pointer;
  border-radius: 7px;
  border: 1px solid #f2f2f2;
  padding: 1px 10px;
  &:hover {
    color: #333;
    background: #ffd333;
  }
`;


export const DisplayProductsContainer = Style.div`
  width: 90%;
  margin: 1px auto;
`;


// ========== Featured product section ========== //

export const Wrapper = Style.div`
  border: 1px solid #F5F7F9;
  background: #F5F7F9;
  padding: 10px;
  padding-bottom: 100px;
`;

export const CardsContainer = Style.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  background: transparent;
  margin: 3px auto;
  justify-content: space-between;
`;

export const SectionHeadingCont = Style.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 30px auto;
`;

export const Title = Style.div`
  font-weight: 700;
  font-size: 25px;
  font-family: Roboto, sans-serif;
  color: rgb(61, 70, 77);
  width: 19%
`;

export const HorizontalRule = Style.div`
  height: 3px;
  background: rgb(235, 235, 235);
  width: 83%;
  position: relative;
  top: 18px;
`;