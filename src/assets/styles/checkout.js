import Style from 'styled-components';

export const CheckoutHeader = Style.h3`
  font-weight: bold;
  margin: 25px 0;
  color: #3d464d;
  margin-bottom: 40px;
`;

export const TableHead = Style.div`
  font-size: 17px;
  font-weight: bold;
`;

export const HeaderContainer = Style.div`
  display:flex;
  justify-content: space-between;
`;
export const CheckoutContainer = Style.div`
  margin: 1px auto;
  width: 90%;
 
`;

export const OrderTableContainer = Style.div`
  margin-top: 20px;
`;

export const OrderedItemImg = Style.img`
  width: 70px;
  height: 70px;
`;

export const OrderedWrapper = Style.div`
  display:flex;
  padding: 15px 0;
  font-size: 17px;
  font-weight: 600;
  border-bottom: 1px solid #ebebeb;
  font-family: Roboto,"sans-serif";
  color: #3d464d;
  max-height: 95px;
  overflow-y: auto;
  justify-content: space-between;
`;
export const OrderProduct = Style.div`
  width: 70%;
`;

export const OrderProductName = Style.div`
  color: #3d464d;
  transform: translate(90px, -44px);
`;

export const orderTotal = Style.div`
  font-size: 17px;
  display: flex;
  align-items: center;
  max-height: 76px;
`;
export const FillMyInformation = Style.div`
  width:100%;
  height:60px;
  background:#b2d9ff;
  font-size:17px;
  padding-top:20px;
  padding-left:20px;
  font-weight:bold;
  font-style:capiterlize;

`;

export const RadioButton = Style.div`
  width:200px;
  margin-left: 30px;
  padding-left:0;
`;
export const RadioInput = Style.input`
padding-left:10px;
`;
export const Radiolabel = Style.label`
margin-left: 2px;
padding-right:10px
`;
export const CheckBoxLabel = Style.label`
margin-left: 10px;
padding-right:10px
font-size:16px;
`;

export const CheckBox = Style.input`
  width:40px
  marggin-bottom:40px;
`;

export const BillingContainer = Style.div`
  display: flex;
  justify-content: space-between;
  height:auto;
  margin-top:50px;
  border-right:none;
  margin-bottom:60px;

`;
export const BilingDetails = Style.div`
  width: 60%;
  border-radius:0.25rem;
  background:#fff;
  height:auto
  border-right:none;
  border-top:none;
`;

export const Order = Style.div`
  border:1px solid #f0f0f0;
  width: 40%;
  height:auto;
`;

export const OrderCardBody = Style.div`
  width: 90%;
  margin: 2px auto;
  padding: 10px;
`;

export const SubTotal = Style.div`

display:grid
  grid-template-columns: repeat(2, 1fr);
`;

export const GridItem = Style.div`
  padding:10px;
  font-weight:500;
`;

export const OrderedTotal = Style.div`
  font-size: 25px;
  margin-top: 20px;
  border-top: 1px solid #f0f0f0;
  font-weight: bolder;
`;

export const PaymentContainer = Style.div`
  margin-top:40px;
`;

export const PaymentLabals = Style.label`
  border:1px solid #f0f0f0;
  width: 100%;
  height:35px;
  padding-top: 5px;
  padding-left:20px;
  &:hover{
    background:#f0f0f0;
  }
`;

export const Span = Style.span`
  margin-left:20px
  color: #3d464d;
  font-weight: bold;
`;

export const Radio = Style.input``;

export const PaymentMethodInfo = Style.div`
  font-size: 15px;
  line-height: 20px;
  padding: 2px 16px 13px 20px;
  text-align:justify
  width: 100%
  background:#f0f0f0;
  color:#6c757d;
  margin-bottom: 10px;
  display: ${props => (props.show ? 'block' : 'none')};
`;

export const OrderButton = Style.button`
  width:100%;
  border-color:#ffd333;
  background-color:#ffd333;
  fill: #ffd333;
  border:none;
  border-radius: 5px;
  cursor:pointer;
  margin-top:40px;
  height: calc(3.625rem + 2px);
  font-weight: bold;
  color: rgb(61, 70, 77);
  &:hover, &:focus{
    background:#3d464d;
    color:#fff;
    fill: #3d464d;
    outline: none;
  }
`;

// ========== Edit Profile Component ========== //

export const EditProfileContainer = Style.div`
  width: 95%;
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
  width: 200px;
  height: 200px;
  background: gainsboro;
  display: flex;
  justify-content: center;
  align-items:center;
  color: rgb(61, 70, 77);
  font-weight: bold;
`;

export const Form = Style.form``;

export const FormGrid = Style.div``;

export const FormGroup = Style.div``;
export const FormCheck = Style.div``;

export const FormInputLabel = Style.label`
  color: #3d464d;
  font-weight: bold;
  font-family: Rubik;
`;

export const FormInput = Style.input`
  width: 90%;
  padding: 9px;
  border-top: ${props => (props.line ? 'none' : 'default')};
  border-left: ${props => (props.line ? 'none' : 'default')};;
  border-right: ${props => (props.line ? 'none' : 'default')};;
  &:focus {
    outline: none;
    border-bottom: 1px solid #fff333;
  }
`;

export const FormTextArea = Style.textarea`
  height:100px;
  margin-top:10px;
  border: 1px solid #ccc;
`;

export const FormButton = Style.button`
  background: ${props => props.bgColor};
  width: 30%;
  font-weight: bold;
  color: ${props => props.color};
  margin-top: 2rem;
`;
export const ShippingdetailsHeader = Style.h3`
margin-top:40px;
`;
