import { Alias } from '../../importer';

export const editProfile = data => async dispatch => {
	try {
		dispatch(Alias.pathToDispatchAbles('loading').processing());
		const response = await Alias.pathToUtils('helpers').Promise('PUT', `/users/edit`, data, "multipart");
		await dispatch(Alias.pathToActions('Authentication').retrieveUserData());
		dispatch(Alias.pathToDispatchAbles('loading').finished());
		Alias.pathToUtils('helpers').Alert.success(response.data.data.message);
	} catch (error) {
		Alias.pathToUtils('helpers').handleError(error);
		dispatch(Alias.pathToDispatchAbles('loading').finished());
	}
};
