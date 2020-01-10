import { Alias } from '../../importer';

const Types = Alias.pathToConstant('types').default;

const initialState = {
  products: null,
  product: null,
  filterOptions: null,
  reqFilter: null,
  filteredProducts: null
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
    case Types.GET_FILTER_OPTIONS:
      return {
        ...state,
        filterOptions: action.payload
      };
    case Types.REQ_FILTERED_PRODUCTS:
      return {
        ...state,
        reqFilter: action.payload
      };
    case Types.RESET_FILTERED_PRODUCTS:
      return {
        ...state,
        reqFilter: null
      };
    case Types.GET_ONE_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
};