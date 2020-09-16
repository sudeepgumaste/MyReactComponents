import React, { useState } from 'react';
import Checkbox from '../components/Checkbox/Checkbox';

export default { title: 'Checkbox' };

export const CheckboxComponent = () => {
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);

  return (
    <div style={{display: 'flex'}}>
      <Checkbox state={state} setState={setState}>
        Checkbox
      </Checkbox>
      <Checkbox state={state1} setState={setState1}>
        Checkbox
      </Checkbox>
      <Checkbox state={state2} setState={setState2}>
        Checkbox
      </Checkbox>
    </div>
  )
};
