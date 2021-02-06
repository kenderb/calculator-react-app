import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Number(new Big(numberOne || 0));
  const num2 = Number(new Big(numberTwo || 0));
  switch (operation) {
    case '-':
      return (num1 - num2);
    case '+':
      return (num1 + num2);
    case 'X':
      return (num1 * num2);
    case '÷':
      if (num2 !== 0) {
        return (num1 / num2);
      }
      return 'no valid operation';
    case '%':
      return ((num2 / 100) * num1);
    default:
      return { total: num1, next: num2, operation: null };
  }
};

export default operate;
