import { Alias } from '../../importer';

export const handleGenerateCode = () => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    const response = await Alias.pathToUtils('helpers').Promise('GET', `/users/generate/code`);
    await dispatch(Alias.pathToDispatchAbles('auth').generate_code(response.data.data.details.generatedCode));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  }
};

export const handleAuthenticate = (data, history) => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    const response = await Alias.pathToUtils('helpers').Promise('POST', '/users/login', data,);
    await dispatch(Alias.pathToDispatchAbles('auth').auth_user(response.data.data.details.user));
    localStorage.setItem('x-auth-t', response.data.data.details.token);
    localStorage.setItem('avatar', response.data.data.details.user.avatar);
    if (localStorage.getItem('token')) { localStorage.removeItem('token')};
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    history.push('/');
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  }
};

export const handleOnBoard = (data, history) => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    const response = await Alias.pathToUtils('helpers').Promise('POST', '/users/create', data);
    await dispatch(Alias.pathToDispatchAbles('auth').onboard_user(response.data.data.details.user));
    localStorage.setItem('x-auth-t', response.data.data.details.token);
    localStorage.setItem('avatar', response.data.data.details.user.avatar);
		if (localStorage.getItem('token')) { localStorage.removeItem('token')};
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    history.push('/');
    // SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  }
};

export const retrieveUserData = () => async dispatch => {
  try {
    dispatch(Alias.pathToDispatchAbles('loading').processing());
    const response = await Alias.pathToUtils('helpers').Promise('GET', `/users/details`);
    await dispatch(Alias.pathToDispatchAbles('auth').auth_user(response.data.data.details.user));
    dispatch(Alias.pathToDispatchAbles('loading').finished());
    // SweetAlert(response.data.data.details.operationStatus, response.data.data.message, 'success');
  } catch (error) {
    Alias.pathToUtils('helpers').handleError(error)
    dispatch(Alias.pathToDispatchAbles('loading').finished());
  }
};