import React from 'react';
import PropTypes from 'prop-types';

import './toggle-button.scss';

const ToggleButton = ({ state, setState }) => {
  return (
    <button
      className={`toggle-button ${state ? 'toggle-button--active' : ''}`}
      onClick={() => {
        setState((val) => !val);
      }}
    >
      <span className='toggle-button__switch' />
    </button>
  );
};

ToggleButton.propTypes = {
  state: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired,
};

export default ToggleButton;
