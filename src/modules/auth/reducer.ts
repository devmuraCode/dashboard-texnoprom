import { createTransform, persistReducer } from 'redux-persist';
import persistStorage from 'redux-persist/lib/storage';
import { ActionType } from 'typesafe-actions';

import * as Actions from './actions';
import * as Constants from './constants';

import type * as Types from './types';

const initialState: Types.IState = {
  isAuthenticated: false,
  isFetched: true,
  token: '',
};

const reducer = (
  state: Types.IState = initialState,
  action: ActionType<typeof Actions>,
): Types.IState => {
  switch (action.type) {
    case Constants.LOGOUT.REQUEST: {
      return {
        ...state,
        isFetched: true,
      };
    }
    case Constants.LOGOUT.SUCCESS: {
      return {
        ...state,
        ...initialState,
        token: '',
        isAuthenticated: true,
        isFetched: true,
      };
    }
    case Constants.LOGIN.REQUEST: {
      const { token } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        isFetched: true,
        token: token.access,
      };
    }
    default:
      return state;
  }
};

const isFetchedTransform = createTransform<boolean, boolean, Types.IState, any>(
  state => state,
  (isFetched, key, stored) => {
    const token: Types.IEntity.Token = JSON.parse(stored.token);

    console.log(token)

    return !token.access;
  },
  { whitelist: ['isFetched'] },
);

const persistConfig = {
  key: 'auth',
  storage: persistStorage,
  whitelist: ['isFetched', 'token'],
  transforms: [isFetchedTransform],
};

export default persistReducer<Types.IState>(persistConfig, reducer);
