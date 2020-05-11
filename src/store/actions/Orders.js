import SweetAlert from 'sweetalert';
import { Alias } from '../../importer';

export const createOrder = data => async dispatch => {
	try {
		dispatch(Alias.pathToDispatchAbles('loading').processing());
		const url = '/order/create';
		const response = await Alias.pathToUtils('helpers').Promise('post', url, data);
		await dispatch(Alias.pathToDispatchAbles('orders').create_order(response.data.data.details));
		SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
		dispatch(Alias.pathToDispatchAbles('loading').finished());
	} catch (error) {
		Alias.pathToUtils('helpers').handleError(error);
		dispatch(Alias.pathToDispatchAbles('loading').finished());
	}
};

export const retreiveOrders = recent => async dispatch => {
	try {
		dispatch(Alias.pathToDispatchAbles('loading').processing());
		const url = recent ? `/order/customer?recent=${recent}` : '/order/customer';
		const response = await Alias.pathToUtils('helpers').Promise('get', url);
		await dispatch(Alias.pathToDispatchAbles('orders').get_orders(response.data.data.details.foundOrders));
		dispatch(Alias.pathToDispatchAbles('loading').finished());
	} catch (error) {
		Alias.pathToUtils('helpers').handleError(error);
		dispatch(Alias.pathToDispatchAbles('loading').finished());
	}
};
