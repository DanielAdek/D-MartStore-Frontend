import { Alias } from '../../importer';

export const CreateReview = async dispatch => {
	try {
		dispatch(Alias.pathToDispatchAbles('loading').processing());
		const url = '/review';
		const response = await Alias.pathToUtils('helpers').Promise('post', url);
		await dispatch(Alias.pathToDispatchAbles('createreview').createreview(response.data.data.details.foundOrders));
		Alias.pathToUtils('helpers').Alert.success(response.data.data.message);
	} catch (error) {
		Alias.pathToUtils('helpers').handleError(error);
		dispatch(Alias.pathToDispatchAbles('loading').finished());
	}
};
