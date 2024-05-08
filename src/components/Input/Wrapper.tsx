import React from 'react';
import cx from 'classnames';

import { WrapperProps } from './Types';

import cls from './Input.module.scss';

interface IProps extends WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<IProps> = ({
  size,
  state,
  disabled,
  isFocused,
  validationMessage,
  children,
}) => {
  return (
    <label
      className={cx(
        cls.wrapper,
        size && cls[`wrapper--size-${size}`],
        state && cls[`wrapper--state-${state}`],
        isFocused && cls['wrapper--focused'],
        { [cls['wrapper--disabled']]: disabled }
      )}
    >
      {children}
      {validationMessage && <span className={cls.validation}>{validationMessage}</span>}
    </label>
  );
};

export default Wrapper;
