import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as CheckboxSelected } from './assets/checkbox-selected.svg';
import { ReactComponent as CheckboxUnselected } from './assets/checkbox-unselected.svg';

import './checkbox.scss';

const Checkbox = ({ state, setState, children, ...props }) => {
  const [click, setClick] = useState(false);

  return (
    <button
      className={`checkbox ${click ? 'checkbox--clicked' : ''}`}
      onClick={() => {
        setState((val) => !val);
        setClick(true);
        setTimeout(() => {
          setClick(false);
        }, 800);
      }}
      {...props}
    >
      <span
        className={`checkbox__icon ${state ? 'checkbox__icon--selected' : ''}`}
        onClick={(e) =>{
          e.stopPropagation();
          setState((val) => !val);
        }}
      >
        <CheckboxUnselected />
        <CheckboxSelected />
      </span>
      <span className='checkbox__text'>{children}</span>
    </button>
  );
};

Checkbox.propTypes = {
  state: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Checkbox;
