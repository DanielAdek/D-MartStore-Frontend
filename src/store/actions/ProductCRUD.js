import SweetAlert from 'sweetalert';
import { Alias } from '../../importer';

export const handleProductCreate = data => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    const response = await Alias.pathToUtils('helpers').Promise('POST', '/product/create', data);
    dispatch(Alias.pathToDispatchAbles('product').create_product(response));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  }
};
export const retreiveProducts = () => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    const response = await Alias.pathToUtils('helpers').Promise('GET', '/product/all');
    dispatch(Alias.pathToDispatchAbles('product').get_products(response.data.data.details.products));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    // SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  }
};

export const retreiveProduct = data => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    const response = await Alias.pathToUtils('helpers').Promise('POST', '/product/create', data);
    dispatch(Alias.pathToDispatchAbles('product').create_product(response));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  }
};