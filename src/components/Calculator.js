import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import { CalculatorDiv, CalculatorContainer } from './styles';

const Calculator = () => {
  const [total, setTotal] = useState('0');
  const [next, setText] = useState(null);
  const [operation, operationText] = useState(null);

  const updateState = ({ total, next, operation }) => {
    setTotal(total);
    setText(next);
    operationText(operation);
  };

  const handleClick = buttonName => {
    let results = {};
    if (operation) {
      results = calculate({ total, next, operation: buttonName }, operation);
      updateState(results);
    } else {
      results = calculate({ total, next, operation: buttonName });
      updateState(results);
    }
  };
  return (
    <CalculatorDiv>
      <h1>Let’s do some math!</h1>
      <CalculatorContainer>
        <Display results={operation ? next : total} />
        <ButtonPanel clickHandler={handleClick} />
      </CalculatorContainer>
    </CalculatorDiv>
  );
};

export default Calculator;
