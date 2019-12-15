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


// KART SECTION
export const add_kart = kart => ({
  type: Types.ADD_TO_KART,
  payload: kart
});

export const get_kartList = kartList => ({
  type: Types.GET_KARTS,
  payload: kartList
});