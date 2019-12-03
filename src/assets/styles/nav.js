import Style from 'styled-components';

export const TNavFlexBoard = Style.div`
    background: #F5F7F9;
    display: flex;
    justify-content: space-between;
    padding: 7px;
    font-family: Rubik;
`;

export const TNavFlexCont = Style.div`
    display: flex;
    width: 40%;
    justify-content: space-around;
`;

export const TNavFlexIconText = Style.div`
    display: flex;
    justify-content: space-evenly;
    border-right: ${props => props.bRight ? '1px solid #d7d7d7' : 'none' };
    width: 30%;
`;

export const TNavListIcon = Style.img`
    width: 13px;
    height: 16px;
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
    margin-right: 40px;
    cursor: pointer;
    font-family: Rubik;
`;