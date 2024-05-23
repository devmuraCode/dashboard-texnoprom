import get from 'lodash/get';

import * as Types from './types';

export const getData = (item?: Types.IEntity.Data): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  title: get(item, 'title'),
  category_id: get(item, 'category_id'),
  logo: get(item, 'logo'),
});
