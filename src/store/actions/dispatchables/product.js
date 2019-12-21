import { Alias } from '../../../importer';

const Types = Alias.pathToConstant('types').default;

export const create_product = product => ({
    type: Types.CREATE_PRODUCT,
    payload: product
});

export const get_products = products => ({
    type: Types.GET_PRODUCTS,
    payload: products
});

export const get_one_product = product => ({
    type: Types.GET_ONE_PRODUCT,
    payload: product
});