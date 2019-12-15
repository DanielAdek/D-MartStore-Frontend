import { Alias } from '../../importer';

const Types = Alias.pathToConstant('types').default;

const initialState = {
  wishList: null,
  wishLists: null,
  kart: null,
  karts: null,
  message: null,
};
  
export default (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TO_WISHLIST:
      return {
        ...state,
        wishList: action.payload
      };
    case Types.GET_WISHLISTS:
      return {
        ...state,
        wishLists: action.payload
      };
    case Types.DEL_WISH:
      return {
        ...state,
        message: action.payload
      };
    case Types.ADD_TO_KART:
      return {
        ...state,
        kart: action.payload
      };
    case Types.GET_KARTS:
      return {
        ...state,
        karts: action.payload
      };
    case Types.DEL_KART:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};