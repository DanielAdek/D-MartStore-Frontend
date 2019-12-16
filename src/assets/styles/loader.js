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
  position: ${props => props.pos || 'fixed'};
  top: ${props => props.t || '30%'};
  left: ${props => props.l || '45%'};
  max-height: ${props => props.mh};
  width: 10%;
`;

export const LoaderTextCont = Style.div`
  display: flex;
  justify-content: center;
  width: 100%
`;

export const LoaderText = Style.div`
  font-weight: bold;
  color: #fff;
  cursor: not-allowed;
  text-align: center;
  font-family: Rubik, Roboto, monospace, sans-serif;
`;


export const styleLoader = {
  color: 'cornflowerblue'
}