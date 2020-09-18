import React from 'react';
import Loader from '../components/Loader/Loader';

export default { title: 'Loader' };

export const loader = () => (
  <Loader />
)

export const loaderColored = () => (
  <Loader loaderColor="#010101"/>
)
