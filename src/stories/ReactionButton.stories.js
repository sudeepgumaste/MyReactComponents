import React, {useState} from 'react';
import ReactionButton from '../components/ReactionButton/ReactionButton';

export default { title: 'ReactionButton' };

export const Button = () => {
  const [emoji, setEmoji] = useState(null);

  return(
    <ReactionButton state={emoji} setState={setEmoji}/>
  )
};
