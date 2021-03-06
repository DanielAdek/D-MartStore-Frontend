import { Alias } from '../../importer';
const Types = Alias.pathToConstant('types').default;

const initialState = {
	review: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case Types.CREATE_REVIEW:
			return {
				...state,
				review: action.payload,
			};
		default:
			return state;
	}
};
