import { Alias } from '../../../importer';

const Types = Alias.pathToConstant('types').default;

export const generate_code = code => ({
    type: Types.GENERATE_CODE,
    payload: code
});
