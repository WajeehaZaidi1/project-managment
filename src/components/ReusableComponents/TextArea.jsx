// ReusableComponents/TextArea.js
import React from "react";

const TextArea = ({
  value,
  onChange,
  placeholder,
  className = "",
  ...rest
}) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full p-2 border rounded-md ${className}`}
    rows="4" // Set rows as needed
    {...rest} // Spread any other props like 'id' or 'aria-label'
  />
);

export default TextArea;
