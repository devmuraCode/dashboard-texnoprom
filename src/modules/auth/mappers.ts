import get from 'lodash/get';

import type * as Types from './types';

export const Token = (item?): Types.IEntity.Token => ({
  access: get(item, 'access') || '',
});
