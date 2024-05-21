import React from 'react';
import { useSelector } from 'react-redux';

import type * as Store from '@/store';

interface IProps {
  children: JSX.Element;
}

const Auth: React.FC<IProps> = ({ children }) => {
  // @ts-ignore
  const accessToken = useSelector<Store.Types.IState, string>(state => state.auth.token);


  return children;
};

export default Auth;
