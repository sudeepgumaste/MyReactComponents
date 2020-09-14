import React from 'react';
import Button from '../components/Button/Button';

export default { title: 'Button' };

export const button = () => (
  <Button onClick={()=>{console.log('Click')}}>
    Primary Button
  </Button>
)
