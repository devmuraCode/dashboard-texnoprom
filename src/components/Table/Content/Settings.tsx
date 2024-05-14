import React from 'react';
import cx from 'classnames';

import cls from '../Table.module.scss';

interface IProps {
  onClick?: () => void;
}

const Settings: React.FC<IProps> = ({ onClick }) => (
  <div className={cx(cls.content, cls['content--settings'])} {...{ onClick }}>
    Mura
  </div>
);

export default Settings;
