import React from 'react'

import './toggle-button.scss';

const ToggleButton = ({state, setState}) => {
  return (
    <button
      className={`toggle-button ${state?'toggle-button--active':''}`}
      onClick={()=>{
        setState(val => !val)
      }}
    >
      <span className='toggle-button__switch' />
    </button>
  )
}

export default ToggleButton
