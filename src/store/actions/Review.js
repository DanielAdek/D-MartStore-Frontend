import { Alias } from '../../importer';

export const createReview = data => async dispatch => {
	try {
		dispatch(Alias.pathToDispatchAbles('loading').processing());
		const url = `/review/create/${data.productId}`;
		const response = await Alias.pathToUtils('helpers').Promise('post', url, data);
		await dispatch(Alias.pathToDispatchAbles('reviews').create_review(response.data.data.details));
		await dispatch(Alias.pathToActions('ProductCRUD').retreiveProduct(data.productId));
		Alias.pathToUtils('helpers').Alert.success(response.data.data.message);
		dispatch(Alias.pathToDispatchAbles('loading').finished());
	} catch (error) {
		Alias.pathToUtils('helpers').handleError(error);
		dispatch(Alias.pathToDispatchAbles('loading').finished());
	}
};
