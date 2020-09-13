import React, {useState} from 'react';
import StarRating from '../components/StarRating/StarRating';

export default { title: 'StarRating' };

export const Button = () => {
  const [rating, setRating] = useState();

  return(
    <StarRating rating={rating} setRating={setRating}/>
  )
};
