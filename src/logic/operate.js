import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Number(new Big(numberOne || 0));
  const num2 = Number(new Big(numberTwo || 0));
  switch (operation) {
    case '-':
      return { total: (num1 - num2), next: '=', operation: null };
    case '+':
      return { total: (num1 + num2), next: '=', operation: null };
    case 'X':
      return { total: (num1 * num2), next: '=', operation: null };
    case '÷':
      if (num2 !== 0) {
        return { total: (num1 / num2), next: '=', operation: null };
      }
      return 'no valid operation';
    case '%':
      return ((num2 / 100) * num1);
    default:
      return { total: num1, next: num2, operation: null };
  }
};

export default operate;
