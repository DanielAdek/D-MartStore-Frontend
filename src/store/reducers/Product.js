import { Alias } from '../../importer';

const Types = Alias.pathToConstant('types').default;

const initialState = {
  products: null,
  product: null
};
  
export default (state = initialState, action) => {
  switch (action.type) {
    case Types.CREATE_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    case Types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case Types.GET_ONE_PRODUCTS:
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
};