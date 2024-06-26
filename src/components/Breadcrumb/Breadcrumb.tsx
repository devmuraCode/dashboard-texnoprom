import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';


import cls from './Breadcrumb.module.scss';

interface IRoute {
  name?: string;
  to?: string;
}

export interface IProps {
  routes: IRoute[];
}

const Breadcrumb: React.FC<IProps> = ({ routes }) => (
  <div className={cls.wrapper}>
    {routes.map((route, i, routes) => {
      const key = `${route.to}-${route.name}`;

      const children = (
        <>
          {!!route.name && <div className={cls.itemName}>{route.name}</div>}
        </>
      );

      if (routes.length - 1 === i) {
        return (
          <div key={key} className={cls.item}>
            {children}
          </div>
        );
      }

      return (
        <Link key={key} className={cx(cls.item, cls.itemLink)} to={route.to || ''}>
          {children}
        </Link>
      );
    })}
  </div>
);

export default Breadcrumb;
