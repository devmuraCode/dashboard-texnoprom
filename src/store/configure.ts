import { Action, applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistReducer, persistStore } from 'redux-persist';
import type { PersistPartial } from 'redux-persist/es/persistReducer';
import type { Persistor } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';

import config from '@/config';

import rootReducer from './store';

import type * as Types from './types';

export default (
  initialState: Partial<Types.IState> = {},
): { store: Store<Types.IState>; persist: Persistor } => {
  const composeEnhancer =
    process.env.NODE_ENV === 'development' ? composeWithDevTools({}) : compose;

  Object.keys(localStorage).forEach(key => {
    const matches = key.match(/persist:version-(.*)/);

    if (!matches || matches.length < 2) {
      return;
    }
    const version = matches[1];

    if (version !== config.app.version) {
      localStorage.removeItem(key);
    }
  });

  const persistConfig = {
    key: `version-${config.app?.version}`,
    storage,
    whitelist: [],
  };
  const persistedReducer = persistReducer<Types.IState>(persistConfig, rootReducer);
  const store: Store<Types.IState> = createStore<
    Types.IState & PersistPartial,
    Action<any>,
    unknown,
    unknown
  >(persistedReducer);
  const persist = persistStore(store);


  /* istanbul ignore next */

  // @ts-ignore
  if (import.meta.hot) {
    // @ts-ignore
    import.meta.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers'));
    });
  }

  return { store, persist };
};
