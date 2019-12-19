import { combineReducers } from "redux";
import { Alias } from '../../importer';

const Types = Alias.pathToConstant('types').default;
const file = Alias.pathToReducers;

// CREATE REDUCER FOR LOADING STATE
const initialState = { loading: false, loadInComponent: false };
  
const Loading =  (state = initialState, action) => {
  switch (action.type) {
    case Types.PROCESSING:
      return {
        ...state,
        loading: true
      };
    case Types.PROCESSING_SMALL_SPIN:
      return {
        ...state,
        loadInComponent: true
      };
    case Types.FINISHED:
      return {
        ...state,
        loading: false,
        loadInComponent: false
      };
    default:
      return state;
  }
};

// COMBINE ALL REDUCERS
export default combineReducers({
    Loading,
    Authenticate: file('Authenticate').default,
    ProductCRUD: file('Product').default,
    WishAndKartCRUD: file('WishAndKartCRUD').default,
    Orders: file('Order').default
});
