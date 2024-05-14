import React, { useState } from "react";

import { TextInputProps } from "./Types";

export type IProps = TextInputProps;

const Input: React.FC<IProps> = ({
  id,
  value,
  type = "text",
  placeholder,
  disabled,
  readOnly,
  autoFocus,
  onChange,
  onBlur,
}) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <input
      {...{ id, value, type, placeholder, disabled, readOnly, autoFocus }}
      onChange={(e) => onChange && onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        setFocused(false);
        onBlur && onBlur(e);
      }}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
    />
  );
};

export default Input;
