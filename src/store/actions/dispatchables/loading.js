import { Alias } from '../../../importer';

const Types = Alias.pathToConstant('types').default;

export const processing = () => ({
    type: Types.PROCESSING
});

export const processing_small_spin = () => ({
    type: Types.PROCESSING_SMALL_SPIN
});

export const finished = () => ({
  type: Types.FINISHED
});

