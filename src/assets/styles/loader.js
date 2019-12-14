import Style from 'styled-components';

export const UnderLay = Style.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#00000080, #000000b3);
`;

export const Loader = Style.div`
  z-index: 11;
  margin: auto;
  position: fixed;
  top: 30%;
  left: 45%;
`;

export const styleLoader = {
  color: 'cornflowerblue'
}