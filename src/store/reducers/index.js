import { combineReducers } from "redux";
import { Alias } from '../../importer';

const Types = Alias.pathToConstant('types').default;
const file = Alias.pathToReducers;

// CREATE REDUCER FOR LOADING STATE
const initialState = { loading: false };
  
const Loading =  (state = initialState, action) => {
  switch (action.type) {
    case Types.PROCESSING:
      return {
        ...state,
        loading: true
      };
    case Types.FINISHED:
      return {
        ...state,
        loading: false
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
    WishAndKartCRUD: file('WishAndKartCRUD').default
});
