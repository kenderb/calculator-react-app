import React from 'react';
import Button from './Button';

const buttons = [
  { name: 'group1', value: ['AC', '+/-', '%', '÷'] },
  { name: 'group2', value: ['7', '8', '9', 'X'] },
  { name: 'group3', value: ['4', '5', '6', '-'] },
  { name: 'group4', value: ['1', '2', '3', '+'] },
  { name: 'group5', value: ['0', '.', '='] },
];

const ButtonPanel = () => (
  <div>
    {buttons.map(item => (
      <div key={item.name}>
        {item.value.map(itemButton => <Button buttonName={itemButton} key={itemButton} />)}
      </div>
    ))}

  </div>
);

export default ButtonPanel;
