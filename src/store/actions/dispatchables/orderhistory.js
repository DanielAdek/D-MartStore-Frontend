import { Alias } from '../../../importer';

const Types = Alias.pathToConstant('types').default;

export const ordersHistory = ordersHistory => ({
	type: Types.GET_ORDER_HISTORY,
	payload: ordersHistory,
});
