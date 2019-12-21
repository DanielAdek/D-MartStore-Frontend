import { Alias } from '../../../importer';

const Types = Alias.pathToConstant('types').default;

export const create_review = newReview => ({
	type: Types.CREATE_REVIEW,
	payload: newReview,
});
