import React from 'react';
import Button from '../components/Button/Button';
import TextButton from '../components/Button/TextButton';
import OutlineButton from '../components/Button/OutlineButton';

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

export const textButton = () => (
  <>
    <TextButton
      onClick={()=>{console.log('Click')}}
      style={{
        marginRight: '1rem'
      }}
    >
      Primary Text Button
    </TextButton>
    <TextButton onClick={()=>{console.log('Click')}} disabled>
      Primary Button Disabled
    </TextButton>
  </>
);

export const outlineButton = () => (
  <>
    <OutlineButton
      onClick={()=>{console.log('Click')}}
      style={{
        marginRight: '1rem'
      }}
    >
      Primary Text Button
    </OutlineButton>
    <OutlineButton onClick={()=>{console.log('Click')}} disabled>
      Primary Button Disabled
    </OutlineButton>
  </>
);
