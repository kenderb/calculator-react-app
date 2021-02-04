import React from 'react';
import Button from './Button';

const buttons = [
  { name: 'group1', values: ['AC', '+/-', '%', '÷'] },
  { name: 'group2', values: ['7', '8', '9', 'X'] },
  { name: 'group3', values: ['4', '5', '6', '-'] },
  { name: 'group4', values: ['1', '2', '3', '+'] },
  { name: 'group5', values: ['0', '.', '='] },
];

const ButtonPanel = () => (
  <div>
    {buttons.map(item => (
      <div key={item.name}>
        {item.values.map(itemButton => <Button buttonName={itemButton} key={itemButton} />)}
      </div>
    ))}

  </div>
);

export default ButtonPanel;
