import React, {useState} from 'react';
import NavbarToggle from '../components/NavbarToggle/NavbarToggle';

export default { title: 'NavbarToggleButton' };

export const Button = () => {
  const [state, setState] = useState(false);

  return(
    <NavbarToggle state={state} setState={setState}/>
  )
};
