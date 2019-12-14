import SweetAlert from 'sweetalert';
import { Alias } from '../../importer';

export const handleWishListCreate = data => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    const response = await Alias.pathToUtils('helpers').Promise('POST', `/wishlist/create/${data.productId}`, data);
    dispatch(Alias.pathToDispatchAbles('product').create_product(response));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  }
};