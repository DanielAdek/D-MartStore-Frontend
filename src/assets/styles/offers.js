import Style from 'styled-components';

export const OfferContainer = Style.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid #f0f0f0;
  padding: 10px 15px 10px 0px;
  width: 25%;
`;

export const OfferIcon = Style.img`
  width: 48px;
  height: 42px;
`;

export const OfferDetails = Style.div`
  padding-top: 2px;
`;

export const OfferDetailTitle = Style.div`
  font-size: 19px;
  line-height: 24px;
  font-weight: 700;
`;

export const OfferDetailText = Style.div`
  font-weight: 400;
  line-height: 1.5;
  font-family: Roboto,"sans-serif";
  font-size: 16px;
`;

export const OfferSection2Images = Style.img`
  width: 33.3%;
  height: 250px;
  border: 2px solid #f0f0f0;
`;