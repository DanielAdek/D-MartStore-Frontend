import { Alias } from '../../../importer';

const Types = Alias.pathToConstant('types').default;

export const get_orders = orders => ({
    type: Types.GET_ORDERS,
    payload: orders
});
