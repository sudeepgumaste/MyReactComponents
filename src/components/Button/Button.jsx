import React, { useState } from 'react';

import './button.scss';

const Button = ({ children, className, onClick, ...props }) => {
  const [click, setClicked] = useState(false);

  return (
    <button
      className={`button ${click ? 'button--clicked' : ''} ${className || ''}`}
      onClick={(e) => {
        setClicked(true);
        setTimeout(() => {
          setClicked(false);
        }, 800);
        onClick();
      }}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
