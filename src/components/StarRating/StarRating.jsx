import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as StarEmpty } from './assets/star-empty.svg';
import { ReactComponent as StarFilled } from './assets/star-filled.svg';

import './star-rating.scss';

const StarRating = ({ rating, setRating }) => {
  const [mouseOn, setMouseOn] = useState(null);

  const getIsActive = (index) => {
    if (mouseOn !== null) {
      if (rating !== null && index > mouseOn) {
        return false;
      } else if (index <= mouseOn) {
        return true;
      }
    } else if (rating !== null && index <= rating) {
      return true;
    }
    return false;
  };

  return (
    <div className='star-rating'>
      {[...Array(5).keys()].map((num) => (
        <button
          key={num}
          className={`star-rating__star-container ${
            getIsActive(num) ? 'star-rating__star-container--active' : ''
          }`}
          onClick={() => {
            setRating(num);
          }}
          onMouseOver={() => {
            setMouseOn(() => num);
          }}
          onMouseOut={() => {
            setMouseOn(() => null);
          }}
        >
          <StarEmpty />
          <StarFilled />
        </button>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number,
  setRating: PropTypes.func.isRequired,
};

StarRating.defaultProps = {
  rating: null,
};

export default StarRating;
