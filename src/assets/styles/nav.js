import Style from 'styled-components';

export const TNavWrapper = Style.div`
  background: #F5F7F9;
  padding: 7px;
`;

export const TNavFlexBoard = Style.div`
  display: flex;
  justify-content: space-between;
  font-family: Rubik;
  width: 90%;
  margin: auto;
`;

export const TNavFlexCont = Style.div`
  display: flex;
  width: 60%;
`;

export const TNavFlexIconText = Style.div`
  display: flex;
  border-right: ${props => props.bRight ? '1px solid #d7d7d7' : 'none' };
  margin-right: 40px;
  flex: 1;
`;

export const TNavListIcon = Style.img`
  width: 13px;
  height: 16px;
  margin-right: 10px;
  transform: translate(0px, 2px);
  cursor: ${props => props.pointer ? 'pointer' : 'default' };
`;

export const TNavSmallText = Style.div`
  font-size: .92857em;
  color: #222;
`;

export const LoginButton = Style.button`
  border: none;
  font-size: .92857em;
  background: transparent;
  padding: 0;
  font-family: Rubik;
  width: 10%;
  display: flex;
  justify-content: space-between;
`;

export const LinkContainer = Style.div`
  margin-left: ${props => props.ml}
`;

export const AvatarContainer = Style.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 65px;
`;

export const Avatar = Style.img`
  width: inherit;
  height: inherit;
  border-radius: inherit;
`
