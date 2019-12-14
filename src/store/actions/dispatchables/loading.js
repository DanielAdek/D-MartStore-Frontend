import { Alias } from '../../../importer';

const Types = Alias.pathToConstant('types').default;

export const processing = () => ({
    type: Types.PROCESSING
});

export const finished = () => ({
  type: Types.FINISHED
});

