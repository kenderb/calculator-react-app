import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '-':
      return Number(new Big(numberOne - numberTwo));
    case '+':
      return Number(new Big(numberOne + numberTwo));
    case 'X':
      return Number(new Big(numberOne * numberTwo));
    case '÷':
      if (numberTwo !== 0) {
        return Number(new Big(numberOne / numberTwo));
      }
      return 'no valid operation';
    default:
      // code block
  }
  return true;
};

export default operate;
