import { Alias } from '../../importer';

export const retreiveOrders = recent => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    const url = recent ? `/order/customer?recent=${recent}` : '/order/customer';
    const response = await Alias.pathToUtils('helpers').Promise('get', url);
    await dispatch(Alias.pathToDispatchAbles('orders').get_orders(response.data.data.details.foundOrders))
    console.log(response);
    Alias.pathToUtils('helpers').Alert.success(response.data.data.message);
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  }
}