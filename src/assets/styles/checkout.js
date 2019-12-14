import Style from 'styled-components';

export const CheckoutHeader = Style.h1`
margin:30px;
margin-left:50px;
`;
export const TableHead = Style.div`
flex:1
font-size:20px;
font-weight:500
`;
export const TableHeadB = Style.div`
flex:1
padding-left:250px;
font-size:20px;
font-weight:500
`;
export const HeaderContainer = Style.div`
display:flex;
margin-bottom:30px;
`;
export const CheckoutContainer = Style.div`
  margin:1px auto;
  width:90%;
 
`;

export const OrderTableContainer = Style.div`

`;
export const OrderedWrapper = Style.div`
display:flex;
padding:20px;
font-size:17px;
font-weight:400;
border-bottom:1px solid #ebebeb
font-family: Roboto,"sans-serif"
color: #3d464d
`;
export const OrderProduct = Style.div`
flex:2;
    font-size: 17px;
    line-height: 19px;
    width: 100%;
    margin-bottom: 40px;
}
`;
export const orderTotal = Style.div`
flex:1;
    font-size: 17px;
    line-height: 19px;
    width: 100%;
    margin-bottom: 40px;
   padding-left: 130px;
}
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
  padding-left:10px;
`;
export const RadioInput = Style.input`
padding-left:30px;
`;
export const Radiolabel = Style.label`
margin-left: 10px;
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
border:1px solid #f0f0f0;
width:750px
border-radius:0.25rem;
background:#fff;
height:650px;
  height:auto
  border-right:none;
  border-top:none;
`;

export const Order = Style.div`
border:1px solid #f0f0f0;
width:520px;
height:auto;
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
font-size:40px;
margin-top:20px;
border-top:1px solid #f0f0f0

`;

export const PaymentContainer = Style.div`
margin-top:40px;
`;

export const PaymentLabals = Style.label`
border:1px solid #f0f0f0;
margin-left:20px;
width:85%;
height:35px;
padding-top: 5px;
padding-left:20px;
&:hover{
  background:#f0f0f0;
}
`;

export const Span = Style.span`
margin-left:20px
`;

export const Radio = Style.input``;

export const PaymentMethodInfo = Style.div`
font-size: 15px;
    line-height: 20px;
    padding: 2px 16px 13px 20px;
    text-align:justify
    width:85%
    background:#f0f0f0;
    color:#6c757d;
    margin-left:20px
   margin-bottom: 10px;
   display: ${props => (props.show ? 'block' : 'none')};
  `;

export const OrderButton = Style.button`
  width:100%;
  border-color:#ffd333;
  border:none;
  &:focus{
  background:#3d464d;
  border:none;
  fill:: #3d464d
}
  fill: #3d464d
  cursor:pinter;
  &:hover{
    background:#3d464d;
    color:#fff;
    fill:: #3d464d
      border:none
  }
  margin-top:40px;
  height: calc(3.625rem + 2px);
  background: ${props => (props.applyBackground ? '#3d464d' : '#ffd333')};
  line-height: 1;
   font-weight: 500;
    border-radius: 2px;
    color:white
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
margin-top:40px;
`;

export const FormButton = Style.button`
  background: ${props => props.bgColor};
  width: 30%;
  font-weight: bold;
  color: ${props => props.color};
  margin-top: 2rem;
`;
export const ShippingdetailsHeader = Style.h1`
margin-top:40px;
`;
