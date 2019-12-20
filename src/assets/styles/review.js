import Style from 'styled-components';

export const ReviewContainer = Style.div`
  display:flex;
  width:90%;
`;

export const ReviewTitle = Style.h1`
  font-style: capiterlize;
  margin: 50px 22px;
`;

export const UserReviewcontent = Style.div`
  color: light-grey;
  text-align: justify;
  margin-top: 30px;
`;
export const UserImage = Style.img`
  width: 100px;
  height: 100px;
  margin-top: 30px;
  margin-left: 50px;
  border-radius: 50%;
`;
export const userReviewParagraph = Style.p`
  margin-left:30px;
`;

export const imageContainer = Style.div`
  width:150px;
  height:150px;
  border-radius:100px;
`;

export const userName = Style.p`
  font-size:17px;
  font-weight;bold;
  margin-left:30px;
`;

export const ReviewDate = Style.p`
  margin-left:30px;
  color:grey;
  font-size:17px;
`;
