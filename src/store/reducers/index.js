import { combineReducers } from 'redux';
import { Alias } from '../../importer';

const Types = Alias.pathToConstant('types').default;
const file = Alias.pathToReducers;

// CREATE REDUCER FOR LOADING STATE
const initialState = {
	loading: false,
	wishlist: false,
	kartAll: false,
	kart: false,
	loadInComponent: false,
	refresh: false
};

const Loading = (state = initialState, action) => {
	switch (action.type) {
		case Types.PROCESSING:
			return {
				...state,
				loading: true,
			};
		case Types.REFRESH:
			return {
				...state,
				refresh: true,
			};
		case Types.REFRESH_END:
			return {
				...state,
				refresh: false,
			};
		case Types.PROCESSING_SMALL_SPIN:
			return {
				...state,
				loadInComponent: true,
				refresh: false
			};
		case Types.PROCESSING_WISHLIST:
			return {
				...state,
				wishlist: true
			};
		case Types.PROCESSING_KART:
			return {
				...state,
				kart: true
			};
		case Types.PROCESSING_KART_ALL:
			return {
				...state,
				kartAll: true
			};
		case Types.FINISHED:
			return {
				...state,
				loading: false,
				loadInComponent: false,
				kartAll: false,
				kart: false,
				wishlist: false,
				refresh: false
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
	Orders: file('Order').default,
	Orderhistory: file('Orderhistory').default,
	EditProfile: file('EditProfile').default,
	Review: file('Review').default,
});
