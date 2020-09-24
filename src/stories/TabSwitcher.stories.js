import React from 'react';
import TabSwitcher from '../components/TabSwitcher/TabSwitcher';

export default { title: 'TabSwitcher' };

export const Button = () => {
  return(
    <TabSwitcher 
      tabs={[
        'Tab 1',
        'Tab 2',
      ]}
      components={[
        <p>Tab 1</p>,
        <p>Tab 2</p>
      ]}
      className="additional-class"
    />
  )
};
