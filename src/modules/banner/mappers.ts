import get from 'lodash/get';

import * as Types from './types';

export const getData = (item?: Types.IEntity.Data): Types.IEntity.Data => ({
  id: get(item, 'id') || '',
  title_ru: get(item, 'title_ru'),
  title_en: get(item, 'title_en'),
  img: get(item, 'img'),
});
