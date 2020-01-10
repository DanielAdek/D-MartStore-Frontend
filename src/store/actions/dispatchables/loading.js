import { Alias } from '../../../importer';

const Types = Alias.pathToConstant('types').default;

export const processing = () => ({
  type: Types.PROCESSING
});

export const processing_kart = () => ({
    type: Types.PROCESSING_KART
});

export const processing_wishlist = () => ({
  type: Types.PROCESSING_WISHLIST
});
export const processing_kart_all = () => ({
  type: Types.PROCESSING_KART_ALL
});

export const processing_small_spin = () => ({
  type: Types.PROCESSING_SMALL_SPIN
});

export const finished = () => ({
  type: Types.FINISHED
});

export const refresh = () => ({
  type: Types.REFRESH
});

export const refresh_end = () => ({
  type: Types.REFRESH_END
});

