import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as Crying} from '../../assets/crying.svg'
import {ReactComponent as Sad} from '../../assets/sad.svg'
import {ReactComponent as Happy} from '../../assets/happy.svg'
import {ReactComponent as Happy2} from '../../assets/happy-2.svg'
import {ReactComponent as Love} from '../../assets/in-love.svg'
import {ReactComponent as NoReaction} from '../../assets/no-reaction.svg'

import './reaction-button.scss';

const ReactionButton = ({ state, setState }) => {
  const [isTriggered, setIsTriggered] = useState(false);

  const reactions = [
    <Crying />,
    <Sad />,
    <Happy />,
    <Happy2 />,
    <Love />,
  ]

  return (
    <div className='reaction-button'>
      <button
        className={`reaction-button__trigger ${isTriggered?'reaction-button__trigger--active':''}`}
        type='button'
        onClick={() => {
          if (state === null){
            setIsTriggered((val) => !val);
          } else {
            setState(null);
          }
        }}
      >
        {
          state !== null ?reactions[state]:<NoReaction />
        }
      </button>
      {isTriggered && 
        <div className='reaction-button__reactions'>
          {
            reactions.map((reaction, index) => (
              <button
                key={index}
                className="reaction-button__reactions__reaction"
                onClick = {
                  ()=>{
                    setState(index);
                    setIsTriggered(false)
                  }
                }
              >
                {reaction}
              </button>
            ))
          }
        </div>
      }
    </div>
  );
};

ReactionButton.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ReactionButton;
