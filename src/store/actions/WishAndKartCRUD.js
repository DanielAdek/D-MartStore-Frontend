import { Alias } from '../../importer';

const { Alert } = Alias.pathToUtils('helpers');

// WISH LIST ACTION SECTION

export const retreiveWishLists = token => async dispatch => {
  const url = localStorage.getItem('x-auth-t') ? '/wishlist/customer' : `/wishlist/customer?token=${localStorage.getItem('token')}`;
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    dispatch(Alias.pathToDispatchAbles('loading').refresh());
    const response = await Alias.pathToUtils('helpers').Promise('GET', url);
    dispatch(Alias.pathToDispatchAbles('wishandkart').get_wishLists(response.data.data.details.foundRecentWishLists));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    dispatch(Alias.pathToDispatchAbles('loading').refresh_end());
  }
};

export const addToWishList = data => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing_wishlist());
    const response = await Alias.pathToUtils('helpers').Promise('POST', `/wishlist/create/${data.productId}`, data);
    dispatch(Alias.pathToDispatchAbles('wishandkart').add_wish(response.data.data.details));
    dispatch(retreiveWishLists())
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    Alert.success(response.data.data.message);
  } catch (error) {
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    Alias.pathToUtils('helpers').handleError(error)
  }
};

export const deleteWish = wishId => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing_small_spin());
    const response = await Alias.pathToUtils('helpers').Promise('delete', `/wishlist/delete/${wishId}`);
    dispatch(Alias.pathToDispatchAbles('wishandkart').del_wish(response.data.data.details));
    dispatch(retreiveWishLists())
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    Alert.success(response.data.data.message);
  } catch (error) {
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    Alias.pathToUtils('helpers').handleError(error)
  }
};


// KART ACTION SECTION
export const retreiveKartList = () => async dispatch => {
  const url = localStorage.getItem('x-auth-t') ? '/cart/customer' : `/cart/customer?token=${localStorage.getItem('token')}`;
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    dispatch(Alias.pathToDispatchAbles('loading').refresh());
    const response = await Alias.pathToUtils('helpers').Promise('GET', url);
    dispatch(Alias.pathToDispatchAbles('wishandkart').get_kartList(response.data.data.details.foundRecentKarts));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    dispatch(Alias.pathToDispatchAbles('loading').refresh_end());
  }
};

export const addToKart = data => async dispatch => {
  const url = localStorage.getItem('x-auth-t') ? '/cart/create' : `/cart/create?kartCode=${localStorage.getItem('token')}`;
  try {
    if (Array.isArray(data)) {
      dispatch(Alias.pathToDispatchAbles('loading').processing_kart_all());
    } else {
      dispatch(Alias.pathToDispatchAbles('loading').processing_kart());
    }
    const response = await Alias.pathToUtils('helpers').Promise('POST', url, data);
    dispatch(retreiveKartList())
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    Alert.success(response.data.data.message);
  } catch (error) {
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    Alias.pathToUtils('helpers').handleError(error)
  }
};

export const sendKartToCheckout = data => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('wishandkart').send_kart_to_checkout(data));
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
  }
};

export const deleteKart = kartId => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing_small_spin());
    const response = await Alias.pathToUtils('helpers').Promise('delete', `/cart/delete/${kartId}`);
    dispatch(Alias.pathToDispatchAbles('wishandkart').del_kart(response.data.data.details));
    dispatch(retreiveKartList())
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    Alert.success(response.data.data.message);
  } catch (error) {
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    Alias.pathToUtils('helpers').handleError(error)
  }
};