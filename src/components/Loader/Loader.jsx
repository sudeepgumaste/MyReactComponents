import React from 'react';
import PropTypes from 'prop-types';

import './loader.scss';

const Loader = ({ loaderColor }) => {
  return (
    <div className='loader'>
      <span
        class='loader__circle'
        style={{
          background: loaderColor,
        }}
      ></span>
      <span
        class='loader__circle'
        style={{
          background: loaderColor,
        }}
      ></span>
      <span
        class='loader__circle'
        style={{
          background: loaderColor,
        }}
      ></span>
      <span
        class='loader__circle'
        style={{
          background: loaderColor,
        }}
      ></span>
    </div>
  );
};

Loader.propTypes = {
  loaderColor: PropTypes.string,
};

export default Loader;
