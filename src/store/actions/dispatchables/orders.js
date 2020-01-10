import { Alias } from '../../../importer';

const Types = Alias.pathToConstant('types').default;

export const get_orders = orders => ({
    type: Types.GET_ORDERS,
    payload: orders
});

export const create_order = order => ({
    type: Types.CREATE_ORDER,
    payload: order
})