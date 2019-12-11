import Style from 'styled-components';

export const Modal = Style.div`
  transform: ${props => props.visible ? 'scale(1)' : 'scale(0)'};
  position: fixed;
  top: ${props => props.t || "5%"};
  left: ${props => props.l || "5%"};
  right: ${props => props.r || "5%"};
  height: auto;
  background: #fff;
  z-index: 10;
  height: ${props => props.h || "700px"};
  width: ${props => props.w || "auto"}
  transition: transform 0.2s ease 0.1s;
`;

export const ModalUnderLay = Style.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  transform: ${props => props.visible ? 'scale(1)' : 'scale(0)'};
  transition: transform 0.2s ease 0.1s;
`;