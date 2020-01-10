import { Alias } from '../../../importer';

const Types = Alias.pathToConstant('types').default;

export const add_wish = wish => ({
    type: Types.ADD_TO_WISHLIST,
    payload: wish
});

export const get_wishLists = wishlist => ({
    type: Types.GET_WISHLISTS,
    payload: wishlist
});

export const del_wish = message => ({
    type: Types.DEL_WISH,
    payload: message
});


// KART SECTION
export const add_kart = () => ({
  type: Types.ADD_TO_KART
});

export const send_kart_to_checkout = karts => ({
  type: Types.SEND_TO_CHECKOUT,
  payload: karts
});

export const get_kartList = kartList => ({
  type: Types.GET_KARTS,
  payload: kartList
});

export const del_kart = message => ({
  type: Types.ADD_TO_KART,
  payload: message
});