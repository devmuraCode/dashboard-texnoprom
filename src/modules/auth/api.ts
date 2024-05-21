import { AxiosPromise } from 'axios';



import * as Types from './types';
import http from '@/services/http';

export const Login = ({
  values,
}: {
  values: Types.IForm.Login;
}): AxiosPromise<Types.IApi.Login.Response> =>
  http.request.post('/users/token/', { ...values } as Types.IApi.Login.Request);