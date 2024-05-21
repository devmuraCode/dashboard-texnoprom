import { action } from 'typesafe-actions';

import * as Types from './types';
import * as Constants from './constants';

export const Login = {
  request: (args: Types.IAction.Login.Request) => action(Constants.LOGIN.REQUEST, args),
};

export const Logout = {
  request: () => action(Constants.LOGOUT.REQUEST),
  success: () => action(Constants.LOGOUT.SUCCESS),
};
