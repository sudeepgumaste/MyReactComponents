import React from 'react';
import Button from '../components/Button/Button';

export default { title: 'Button' };

export const button = () => (
  <>
    <Button
      onClick={()=>{console.log('Click')}}
      style={{
        marginRight: '1rem'
      }}
    >
      Primary Button
    </Button>
    <Button onClick={()=>{console.log('Click')}} disabled>
      Primary Button Disabled
    </Button>
  </>
);
