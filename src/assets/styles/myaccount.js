import Style from 'styled-components';

export const SectionWrapper = Style.div`
  background: #fff;
`;

export const SectionContainer = Style.div`
  width: 90%;
  margin-top: 30px;
  margin: 10px auto;
  margin-bottom: 80px;
`;

export const SectionHeader = Style.div`
  font-weight: bolder;
  font-size: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: rgb(61, 70, 77);
`;

export const SectionLayout = Style.div`
  display: grid;
  grid-template-columns: 20% 80%;
  column-gap: 20px;
`;

// ========= Dashboard Section Right Side ======== //

export const DashboardContainer = Style.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const DashboardCardContainer = Style.div`
  width: ${props => props.w || "calc(50% - 12px)"};
  border: 1px solid rgb(240, 240, 240);
  border-image: initial;
  border-radius: 2px;
  margin-top: ${props => props.mt || "0px"}
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0px;
  overflow-wrap: break-word;
  background-color: rgb(255, 255, 255);
  background-clip: border-box;
  // &:hover {
  //   border: 1px solid #ffd333
  // }
`;

export const DashboardCardBody = Style.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align || "center"};
  justify-content: center;
  padding: 2rem;
  flex: 1 1 auto;
`;

export const DashboardAvatar = Style.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ccc;
`;

export const DashboardImageAvatar = Style.img`
  width: inherit;
  height: inherit;
  border-radius: inherit;
`;

export const DashboardUserName = Style.h4`
  font-family: Roboto, sans-serif;
`;

export const DashboardUserEmail = Style.div`
  font-family: Rubik
`;

export const DashboardEditButton = Style.button`
  color: rgb(61, 70, 77);
  background: gainsboro;
  width: 100px;
  font-weight: bold;
`;

export const DashboardContact = Style.h4`
  font-family: Roboto, sans-serif;
`

export const DashboardAddrLabel = Style.div`
  margin-top: 15px;
  font-size: 12px;
  color: #ccc;
`;
export const DashboardAddr = Style.p`
  font-family: Roboto, sans-serif;
  width: 50%;
`;

export const DashboardPhoneLabel = Style.div`
  font-size: 12px;
  color: #ccc;
`;

export const DashboardPhoneNo = Style.h5`
  color: rgb(61, 70, 77);
`;

export const DashboardEmailLabel = Style.div`
  font-size: 12px;
  color: #ccc;
`;

export const DashboardEmail = Style.h5`
  font-family: Rubik;
`;

export const DashboardRecentOrderTitle = Style.h4`
  font-family: Roboto, sans-serfif;
  margin-left: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const DashboardTable = Style.table`
  margin-left: 2rem;
  margin-bottom: 2rem;
  font-family: arial, Roboto, sans-serif;
  border-collapse: collapse;
  width: 90%;
`;

export const DashboardTbody = Style.tbody``;

export const DashboardTableRow = Style.tr`
  &:hover {
    background-color: ${props => props.bgColorOnHover};
  }
`;

export const DashboardTableHeader = Style.th`
  border: 1px solid #f2f2f2;
  text-align: left;
  padding: 18px;
`;

export const DashboardTableData = Style.td`
  border: 1px solid #f2f2f2;
  text-align: left;
  padding: 14px;
`;


// ========== Edit Profile Component ========== //

export const EditProfileContainer = Style.div`
  width: 90%;
  border: 2.3px solid rgb(240, 240, 240);
  padding: 2rem;
`;

export const EditProfileHeading = Style.h4`
  margin-bottom: 2rem;
  font-weight: bold;
  color: #3d464d;
  border-bottom: 2px solid rgb(235, 235, 235);
  padding-bottom: 10px;
`;

export const EditProfilePicture = Style.div`
  text-align: center;
  margin-bottom: 20px;
  margin: 30px 40%;
  font-size: 15px;
  width: 150px;
  height: 150px;
  background: gainsboro;
  display: flex;
  justify-content: center;
  align-items:center;
  color: rgb(61, 70, 77);
  font-weight: bold;
`;

export const EditProfileImage = Style.img`
  width: inherit;
  height: inherit;
`;

export const Form = Style.form``;

export const FormGrid = Style.div``;

export const FormGroup = Style.div``;

export const FormInputLabel = Style.label`
  color: #3d464d;
  font-weight: bold;
  font-family: Rubik;
`;

export const FormInput = Style.input`
  width: 90%;
  padding: 7px;
  border-top: ${props => props.line ? 'none' : 'default'};
  border-left: ${props => props.line ? 'none' : 'default'};;
  border-right: ${props => props.line ? 'none' : 'default'};;
  &:focus {
    outline: none;
    border-bottom: 1px solid #fff333;
  }
`;

export const FormTextArea = Style.textarea``;

export const FormButton = Style.button`
  background: ${props => props.bgColor};
  width: 30%;
  font-weight: bold;
  color: ${props => props.color};
  margin-top: 2rem;
`;


// ============ Order History Components ============ //

export const OrderHistoryContainer = Style.div`
  width: 90%;
  border: 1px solid rgb(240, 240, 240);
`;

export const OrderHistoryTitle = Style.div`
  font-family: Roboto, sans-serfif;
  margin-left: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 24px;
`;

export const OrderHistoryTable = Style.table`
  margin-bottom: 2rem;
  font-family: arial, Roboto, sans-serif;
  border-collapse: collapse;
  width: 100%;
  border-left: none;
`;

export const OrderHistoryTbody = Style.tbody``;

export const OrderHistoryTableRow = Style.tr`
  &:hover {
    background-color: ${props => props.bgColorOnHover};
  }
`;

export const OrderHistoryTableHeader = Style.th`
  border: 1px solid #f2f2f2;
  text-align: left;
  padding: 18px;
`;

export const OrderHistoryTableData = Style.td`
  border: 1px solid #f2f2f2;
  text-align: left;
  padding: 14px;
`;


// ========== Create Product Component ======= //

export const CreateProductContainer = Style.div`
  width: 90%;
  border: 2.3px solid rgb(240, 240, 240);
  padding: 2rem;
`;


export const CreateProductTitle = Style.h4`
  margin-bottom: 2rem;
  font-weight: bold;
  color: #3d464d;
  border-bottom: 2px solid rgb(235, 235, 235);
  padding-bottom: 10px;
`;

export const Select = Style.select``;

export const SelectOption = Style.option``;

// ============ Preview Product Component ========= //

export const Body = Style.div`
  display: grid;
  grid-template-columns: 45% 55%;
  column-gap: 5px;
  width: 100%;
  margin-top: 30px;
`;

export const CloseBtn = Style.div`
  padding: 5px;
  font-size: 24px;
  color: $ccc;
  position: absolute;
  right: 15px;
  top: 10px;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;


export const ContentBody = Style.div`
  padding: 20px;
`;

export const ProductMagnifiedImageCont = Style.div`
  width: 98%;
  margin: 1px auto;
  height: 400px;
`;

export const ProductMagnifiedImage = Style.img``;

export const ProductRightSide = Style.div`
  width: 90%;
`;

export const ProductName = Style.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const ProductHeading = Style.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProductDetails = Style.p`
  font-family: Roboto,"sans-serif";
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: #3d464d;
`;

export const ProductStatus = Style.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const ProductStatText = Style.span`
  color: #ccc;
  font-size: 1rem;
  margin-right: 15px;
`;

export const ProductPrice = Style.span`
  font-weight: bold;
  font-size: 1.8rem;
  color: #495057;
`;

export const ProductActionButtonSec = Style.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
  margin-top: 20px;
`;

export const ProductActionButton = Style.button`
  background: ${props => props.bgColor}
  width: 100px;
  color: ${props => props.clr};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  &:hover {
    color: ${props => props.hClr};
  }
`;

export const ProductImagesContainer = Style.div`
  display: flex;
  width: 60%;
  height: 20%;
  overflow-x: auto
  margin-top: 20px;
`;

export const ProductImages = Style.img`
  width: 100px;
  box-sizing: border-box;
  border: 1px solid #f2f2f2;
  border-radius: 2px;
  margin-right: 4.5px;
  &:hover, &:active, &:focus {
    border-color: #ffd333;
    cursor: pointer;
  }
`;