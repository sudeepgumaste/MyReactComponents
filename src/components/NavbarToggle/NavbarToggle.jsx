import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './navbar-toggle.scss';

const NavbarToggle = ({ state, setState }) => {
  const [click, setClicked] = useState(false);
  return (
    <button
      className={`navbar-toggle ${state ? 'navbar-toggle--active' : ''} ${
        click ? 'navbar-toggle--clicked' : ''
      }`}
      onClick={(e) => {
        setClicked(true);
        setTimeout(() => {
          setClicked(false);
        }, 800);
        setState((val) => !val);
      }}
    >
      <span className='navbar-toggle__dash'></span>
      <span className='navbar-toggle__dash'></span>
      <span className='navbar-toggle__dash'></span>
    </button>
  );
};

NavbarToggle.propTypes = {
  state: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired,
};

export default NavbarToggle;
