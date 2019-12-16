import { Alias } from '../../../importer';

const Types = Alias.pathToConstant('types').default;

export const generate_code = code => ({
    type: Types.GENERATE_CODE,
    payload: code
});

export const auth_user = user => ({
    type: Types.AUTHENTICATE,
    payload: user
});

export const onboard_user = user => ({
    type: Types.ONBOARD,
    payload: user
});
