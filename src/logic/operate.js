import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '-':
      return Number(new Big(numberOne - numberTwo));
    case '+':
      return Number(new Big(numberOne + numberTwo));
    default:
      // code block
  }
  return true;
};

export default operate;
