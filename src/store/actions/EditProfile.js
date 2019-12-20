import SweetAlert from 'sweetalert';
import { Alias } from '../../importer';

export const editProfile = data => async dispatch => {
	try {
		dispatch(Alias.pathToDispatchAbles('loading').processing());
		const response = await Alias.pathToUtils('helpers').Promise('PUT', `/edit/${data.userId}`, data);
		dispatch(Alias.pathToDispatchAbles('editprofile').edit_profile(response));
		dispatch(Alias.pathToDispatchAbles('loading').finished());
		SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
	} catch (error) {
		Alias.pathToUtils('helpers').handleError(error);
		dispatch(Alias.pathToDispatchAbles('loading').finished());
	}
};
