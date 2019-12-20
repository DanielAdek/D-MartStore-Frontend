import { Alias } from '../../../importer';

const Types = Alias.pathToConstant('types').default;

export const edit_profile = editProfile => ({
	type: Types.EDIT_PROFILE,
	payload: editProfile,
});
