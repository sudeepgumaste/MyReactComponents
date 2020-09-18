import React from 'react';
import LayoutLoader from '../components/LayoutLoader/LayoutLoader';

export default { title: 'LayoutLoader' };

export const layoutLoader = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center'
  }}>
    <LayoutLoader style={{
      borderRadius: '50%',
      height: '5rem',
      width: '5rem',
      marginRight:'0.5rem'
    }} />
    <LayoutLoader style={{
      borderRadius: '0.25rem',
      height: '2.5rem',
      width: '15rem'
    }} />
  </div>
)
