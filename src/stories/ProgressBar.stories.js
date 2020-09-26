import React, { useEffect, useState } from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';

export default { title: 'Progress Bar' };

export const Progress = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      if (state < 100) {
        setState(val => val + 1);
      }
      else {
        clearInterval(int)
      }
    }, 50)

    return () => {
      if (int) {
        clearInterval(int)
      }
    }
  }, [state])


  return (
    <ProgressBar total={100} completed={state} width="15rem" />
  )
};
