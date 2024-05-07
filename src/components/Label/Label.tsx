import React from 'react';
import cx from 'classnames';

import cls from './Label.module.scss';

export interface IProps {
  title: string;
  required?: boolean;
  link?: React.ReactNode;
  error?: boolean;
  message?: string;
  position?: 'vertical' | 'horizontal';
  children?: React.ReactNode;
}

const Label: React.FC<IProps> = ({ title, required, link, error, position = 'vertical', children }) => (
  <div className={cx(cls.wrapper, cls[`wrapper--position-${position}`], error && cls['wrapper--error'])}>
    <div className={cls.header}>
      <div className={cls.headerLeft}>
        <div className={cls.title}>
          {required && <span>*</span>}
          {title}
        </div>
      </div>
      {(!!link) && (
        <div className={cls.headerRight}>
          {!!link && <div className={cls.link}>{link}</div>}
        </div>
      )}
    </div>

  </div>
);

export default Label;
