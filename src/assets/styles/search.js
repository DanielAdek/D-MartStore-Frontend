import Style from 'styled-components';

export const SearchBox = Style.form`
  position: relative;
  height: 42px;
  display: flex;
  width: 50%;
  border: 2px solid #ccc;
  border-radius: 4px;
`;

export const SearchInput = Style.input`
  width: 1px;
  flex-grow: 1;
  font-size: 15px;
  color: inherit;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 0px 17px;
  background: transparent;
  transition: color 0.15s ease 0s;
`;

export const SearchButton = Style.button`
  flex-grow: 0;
  width: 42px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: rgb(191, 191, 191);
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 0px;
  background: transparent;
  transition: fill 0.15s ease 0s;
`;

export const SearchIcon = Style.svg`
  color: yellow;
  width: 20px;
  height: 20px;
`;

export const SearchIconTitle = Style.title`
  background: white;
`;

export const SearchIconPath = Style.path``;

export const encoded = "M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15 c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8 c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z";