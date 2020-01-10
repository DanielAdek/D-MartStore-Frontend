import { Alias } from '../../importer';

const Types = Alias.pathToConstant('types').default;
  
const initialState = {
  orders: null,
  order: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ORDERS:
      return {
        ...state,
        orders: action.payload
      };
    case Types.CREATE_ORDER:
      return {
        ...state,
        order: action.payload
      };
    default:
      return state;
  }
};