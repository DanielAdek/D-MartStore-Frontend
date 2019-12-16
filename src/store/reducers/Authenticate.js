import { Alias } from '../../importer';

const Types = Alias.pathToConstant('types').default;
  
const initialState = {
  userCode: null,
  user: null
};
  
export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GENERATE_CODE:
      return {
        ...state,
        userCode: action.payload
      };
    case Types.ONBOARD:
      return {
        ...state,
        user: action.payload
      };
    case Types.AUTHENTICATE:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};