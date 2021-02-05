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
    case '%':
      return Number(new Big((numberTwo / 100) * numberOne));
    default:
      return false;
  }
};

export default operate;
