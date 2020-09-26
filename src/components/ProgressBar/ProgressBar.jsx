import React from 'react';
import PropTypes from 'prop-types';

import './progress-bar.scss';

const ProgressBar = ({ completed, total, width }) => {
  return (
    <div
      className='progress-bar'
      style={{
        width,
      }}
    >
      <div
        className='progress-bar__completion'
        style={{
          width: `${(completed / total) * 100}%`,
        }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
};

export default ProgressBar;
