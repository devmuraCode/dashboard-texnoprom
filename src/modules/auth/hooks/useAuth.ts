import { useDispatch, useSelector } from 'react-redux';

import * as StoreTypes from '@/store/types';

import * as Actions from '../actions';

interface IReturn {
  isAuthenticated: boolean;
  isFetched: boolean;
  token: string;
  methods: {
    logout: () => void;
  };
}

const useAuth = (): IReturn => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector<StoreTypes.IState, boolean>(
    state => state.auth.isAuthenticated,
  );
  const isFetched = useSelector<StoreTypes.IState, boolean>(state => state.auth.isFetched);
  const token = useSelector<StoreTypes.IState, string>(state => state.auth.token);

  const logout = () => {
    dispatch(Actions.Logout.request());
  };

  return { isAuthenticated, isFetched, token, methods: { logout } };
};

export default useAuth;
