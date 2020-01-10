import SweetAlert from 'sweetalert';
import { Alias } from '../../importer';

export const handleProductCreate = (data, history) => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    const response = await Alias.pathToUtils('helpers').Promise('POST', '/product/create', data);
    dispatch(Alias.pathToDispatchAbles('product').create_product(response));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    history.push('/shop')
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
    dispatch(Alias.pathToDispatchAbles('product').get_products(response.data.data.details));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    // SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  }
};

export const retreiveProductsByFilter = data => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    const response = await Alias.pathToUtils('helpers').Promise('get', `/product/filter?productCategory=${data}`);
    dispatch(Alias.pathToDispatchAbles('product').get_products(response.data.data.details));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    // SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  }
};

export const requestProductsByFilter = data => dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('product').req_filtered_products(data));
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error);
  }
};

export const resetProductsByFilter = () => dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('product').reset_filtered_products());
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error);
  }
};

export const retreiveProduct = productId => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    const response = await Alias.pathToUtils('helpers').Promise('get', `/product/${productId}`);
    dispatch(Alias.pathToDispatchAbles('product').get_one_product(response.data.data.details));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    // SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  }
};