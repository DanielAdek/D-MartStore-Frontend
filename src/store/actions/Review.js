import { Alias } from '../../importer';

export const createOrUpdateReview = data => async dispatch => {
	try {
		dispatch(Alias.pathToDispatchAbles('loading').processing());
		const url = `/review/create/${data.productId}`;
		const response = await Alias.pathToUtils('helpers').Promise('post', url, data);
		await dispatch(Alias.pathToDispatchAbles('reviews').create_review(response.data.data.details));
		Alias.pathToUtils('helpers').Alert.success(response.data.data.message);
		dispatch(Alias.pathToDispatchAbles('loading').finished());
	} catch (error) {
		Alias.pathToUtils('helpers').handleError(error);
		dispatch(Alias.pathToDispatchAbles('loading').finished());
	}
};
