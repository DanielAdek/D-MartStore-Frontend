import { Alias } from '../../importer';

const Types = Alias.pathToConstant('types').default;

const initialState = {
	orderhistory: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case Types.GET_ORDER_HISTORY:
			return {
				...state,
				orders: action.payload,
			};
		default:
			return state;
	}
};
