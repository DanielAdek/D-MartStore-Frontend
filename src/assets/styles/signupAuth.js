import Style from 'styled-components';

export const signupContainer = Style.div`
  display:flex;
`;

export const SignupLeft = Style.div`
  flex:1;
  background-image: url("https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500(28 kB)");
  background-size: cover;
  background-position: left 40%;
  background-repeat: no-repeat;
  min-height: 800px;
`;
export const Signupright = Style.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const SignupwelcomeText = Style.div`
  font-size: 18px;
  background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);  
  -webkit-background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text; 
  background-clip: text;
  color: transparent;
  text-align: center;
  font-size: xx-large;
  font-variant: diagonal-fractions;
  font-family: cursive;
`;

export const FormInput = Style.input`
  background: #fff;
  border: 1px solid #9a9a9a;
  border-radius: 4px;
  margin: 13px 0;
  font-size: 16px;
  line-height: 22px;
  color: #3e4c59;
  position: relative;
  padding: 27px;
`;

export const formRow = Style.div``;

export const formGroup = Style.div``;

export const Form = Style.form`
  margin:1px auto;
  width: 80%;
`;
export const SiteLogo = Style.div`
  display: flex;
  justify-content: center;
`;
export const SignupBotton = Style.button`
  padding:20px;
  width: 100%;
  background: #174a41;
  color:#fff;
  font-weight: bold;
  border-radius: 7px;
`;

export const SignupHeadText = Style.div`
  font-size: 20px;
  color: #49393b;
  line-height: 22px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: CircularStd, Helvetica, sans-serif;
  text-align: ${props => props.pos || 'center'};
  font-size: 17px;
`;
export const SignupLeftImage = Style.img``;

