
import React from 'react';

const Button = ({ type = 'button', className = '', onClick, children }) => {
  return (
    <button
      type={type}
      className={` ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
