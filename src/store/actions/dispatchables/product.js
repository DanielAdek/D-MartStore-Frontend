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

export const get_filter_options = options => ({
    type: Types.GET_FILTER_OPTIONS,
    payload: options
});

export const req_filtered_products = data => ({
    type: Types.REQ_FILTERED_PRODUCTS,
    payload: data
});

export const reset_filtered_products = () => ({
    type: Types.RESET_FILTERED_PRODUCTS,
});

export const get_one_product = product => ({
    type: Types.GET_ONE_PRODUCT,
    payload: product
});