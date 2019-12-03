import Style from 'styled-components';

export const Card = Style.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 16px;
  border-radius: 4px;
  background: #fff;
  padding: 24px 20px;
  width: 25%
  flex-grow: 1;
  margin: 5px 5px;
  &:hover {
    transform: scale(1.01);
    opacity: 0.8;
  }
`;

export const CardImage = Style.img`
  width: 50%;
`;

export const CardDetailCont = Style.div`
  display: block;
`;

export const CardDetails = Style.div`
  text-align: center;
  font-size: 1.01rem;
  color: rgb(108, 117, 125);
`;

export const ShowAll = Style.div`
  color: blue;
  font-family: Rubik;
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
`;