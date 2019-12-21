import { Alias } from '../../../importer';

const Types = Alias.pathToConstant('types').default;

export const createReview = createReview => ({
	type: Types.CREATE_REVIEW,
	payload: createReview,
});
