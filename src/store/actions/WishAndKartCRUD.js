import SweetAlert from 'sweetalert';
import { Alias } from '../../importer';

// WISH LIST ACTION SECTION
export const addToWishList = data => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing_small_spin());
    const response = await Alias.pathToUtils('helpers').Promise('POST', `/wishlist/create/${data.productId}`, data);
    dispatch(Alias.pathToDispatchAbles('wishandkart').add_wish(response.data.data.details));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
  } catch (error) {
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    Alias.pathToUtils('helpers').handleError(error)
  }
};

export const retreiveWishLists = token => async dispatch => {
  const url = localStorage.getItem('x-auth-t') ? '/wishlist/customer' : `/wishlist/customer?token=${token}`;
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    const response = await Alias.pathToUtils('helpers').Promise('GET', url);
    dispatch(Alias.pathToDispatchAbles('wishandkart').get_wishLists(response.data.data.details.foundRecentWishLists));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    // SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  }
};


// KART ACTION SECTION
export const addToKart = data => async dispatch => {
  const url = localStorage.getItem('x-auth-t') ? '/cart/create' : `/cart/create?kartCode=${localStorage.getItem('token')}`;
  try {
    if (Array.isArray(data)) {
      dispatch(Alias.pathToDispatchAbles('loading').processing());
    } else {
      dispatch(Alias.pathToDispatchAbles('loading').processing_small_spin());
    }
    const response = await Alias.pathToUtils('helpers').Promise('POST', url, data);
    dispatch(Alias.pathToDispatchAbles('wishandkart').add_kart(response.data.data.details));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
  } catch (error) {
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    Alias.pathToUtils('helpers').handleError(error)
  }
};

export const retreiveKartList = token => async dispatch => {
  const url = localStorage.getItem('x-auth-t') ? '/wishlist/customer' : `/wishlist/customer?token=${token}`;
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    const response = await Alias.pathToUtils('helpers').Promise('GET', url);
    dispatch(Alias.pathToDispatchAbles('wishandkart').get_kartList(response.data.data.details.foundRecentWishLists));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    // SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  }
};