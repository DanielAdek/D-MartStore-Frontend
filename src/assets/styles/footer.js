import Style from 'styled-components';


export const Wrapper = Style.div`
  background: #3d464d;
  color: #f2f2f2;
  font-family: Rubik;
`;

export const Container = Style.div`
  width: 90%;
  margin: 0px auto;
  display: grid;
  padding: 10px;
  grid-template-columns: 37% 23% 40%;
  padding-top: 70px;
  padding-bottom: 30px;
`;

export const FooterHeadings = Style.h2`
  color: #859ba6;
`;

export const Contact = Style.div`
  display: flex;
  flex-direction: column;
`;

export const ContactText = Style.p`
  font-size: 17px;
`;

export const ContactOptions = Style.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ContactOptionsList = Style.li`
  font-family: sans-serif;
  color: #f2f2f3;
  font-size: 18px;
  margin-top: 12px;
`;

export const ContactOptionsListIcon = Style.img`
  width: 26px;
  height: 22px;
  margin-right: 5px;
  color: #fff;
`;


export const Information = Style.div`
  display: block;
`;

export const InfoLists = Style.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const InfoList = Style.li`
  font-size: 19px;
  &:hover {
    color: #fff;
    cursor: pointer
  }
`;



export const NewsLetter = Style.div`
  display: flex;
  flex-direction: column;
`;

export const NewsLetterText = Style.p``;

export const NewsLetterInputCont = Style.div`
  display: flex;
`;

export const NewsLetterInput = Style.input`
  width: 70%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #333;
  background-color: rgb(255, 255, 255);
  padding: 0.375rem 0.75rem;
  border-width: 1px;
  border: none;
`;

export const NewsLetterButton = Style.button`
  color: rgb(61, 70, 77);
  border-color: rgb(255, 211, 51);
  background: rgb(255, 211, 51);
  margin-left: 10px;
  border: none;
  font-weight: bold;
  padding-left: 30px;
  padding-right: 30px;
`;


export const FooterMinorContainer = Style.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterMinorWrapper = Style.div`
  background: #2d2d2d;
  color: #999;
`;

export const FooterMinorText = Style.p`
  font-family: Rubik;
`;

export const FooterMinorLink = Style.a`
  color: #fff;
  text-decoration: underline;
`;