import { AxiosPromise } from 'axios';

import * as Types from './types';
import http from '@/services/http';

export const List = (): AxiosPromise<Types.IApi.List.Response> =>
  http.request.get('/banners');


export const Single = ({ id }: { id: string }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.get(`/banners/${id}`);

export const Create = ({
  values,
}: {
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post('/banners', {
    title_ru: values.title_ru,
    title_en: values.title_en,
    img: values.img,
  });

export const Update = ({
  id,
  values,
}: {
  id: string;
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.put(`/banners/${id}`, {
    title_ru: values.title_ru,
    title_en: values.title_en,
    img: values.img,
  });

export const Delete = ({ id }: { id: string }): AxiosPromise<Types.IApi.Single.Response> =>{
  console.log(id);
  
 return http.request.delete(`/banners/${id}/`);
}
  
  
