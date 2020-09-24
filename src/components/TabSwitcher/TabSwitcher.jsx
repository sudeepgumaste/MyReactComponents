import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './tab-switcher.scss';

const TabSwitcher = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={`tab-switcher ${props.className}`}>
      <div
        className={`tab-switcher__tabs-container ${props.className}__tabs-container`}
      >
        {props.tabs.map((tab, index) => (
          <button
            className={`tab-switcher__tabs-container__tabs ${
              props.className
            }__tabs-container__tabs
                ${
                  index === selectedIndex
                    ? 'tab-switcher__tabs-container__tabs--active'
                    : ''
                }
                ${
                  index === selectedIndex
                    ? `${props.className}__tabs-container__tabs--active`
                    : ''
                }
              `}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={`tab-switcher__container ${props.className}__container`}>
        {props.components[selectedIndex]}
      </div>
    </div>
  );
};

TabSwitcher.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  components: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default TabSwitcher;
