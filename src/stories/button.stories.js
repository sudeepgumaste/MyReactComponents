/* eslint-disable react/jsx-filename-extension */
import React, {useState} from 'react';
import ReactionButton from '../components/ReactionButton/ReactionButton';

export default { title: 'Button' };

export const Button = () => {
  const [emoji, setEmoji] = useState(null);

  return(
    <ReactionButton state={emoji} setState={setEmoji}/>
  )
};
