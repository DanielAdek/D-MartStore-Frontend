import Style from 'styled-components';

export const ShopContainer = Style.div`
  width: 90%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: 22% 78%;
  column-gap: 30px;
  max-height: 1700px;
`;

export const ShopMainSection = Style.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ShopPagination = Style.div`
  display: flex;
  width: 90%;
  margin: 10px auto;
  justify-content: center;  
`;