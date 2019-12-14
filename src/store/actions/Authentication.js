import SweetAlert from 'sweetalert';
import { Alias } from '../../importer';

export const handleGenerateCode = () => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    const response = await Alias.pathToUtils('helpers').Promise('GET', `/users/generate/code`);
    await dispatch(Alias.pathToDispatchAbles('auth').generate_code(response.data.data.details.generatedCode));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  }
};