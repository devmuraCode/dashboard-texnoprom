import configure from './configure';

export * as Types from './types';
export * as Constants from './constants';

export { configure };

export const { store, persist } = configure();
