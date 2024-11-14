// ReusableComponents/TextInput.js
import React from "react";

const TextInput = ({
    type,
  value,
  onChange,
  placeholder,
  className = "",
  ...rest
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full p-2 border rounded-md ${className}`}
    {...rest} // Pass down any other props
  />
);

export default TextInput;
