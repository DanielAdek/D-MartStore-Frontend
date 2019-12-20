import { Alias } from '../../importer';

const Types = Alias.pathToConstant('types').default;

const initialState = {
	edithistory: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case Types.EDIT_PROFILE:
			return {
				...state,
				edithistory: action.payload,
			};
		default:
			return state;
	}
};
