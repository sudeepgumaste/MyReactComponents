import React, {useState} from 'react';
import ToggleButton from '../components/ToggleButton/ToggleButton';

export default { title: 'ToggleButton' };

export const Button = () => {
  const [state, setState] = useState(false);

  return(
    <ToggleButton state={state} setState={setState}/>
  )
};
