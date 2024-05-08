import React, { useState, ChangeEvent } from 'react';
import { TextInputProps } from './Types';
import Wrapper from './Wrapper';

export type IProps = TextInputProps;

const Input: React.ForwardRefExoticComponent<IProps> = React.forwardRef<HTMLInputElement, IProps>(({
  id,
  state,
  value,
  type = 'text',
  size = 'medium',
  placeholder,
  disabled,
  readOnly,
  autoFocus = false,
  onChange,
  onBlur,
  validationMessage,
}, ref) => {
  const [isFocused, setFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    if (onBlur) onBlur(e);
  };

  return (
    <Wrapper
      size={size}
      state={state}
      isFocused={isFocused}
      disabled={disabled}
      validationMessage={validationMessage}
    >
      <input
        id={id}
        ref={ref}
        value={value}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        autoFocus={autoFocus}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={handleBlur}
      />
    </Wrapper>
  );
});

export default Input;
