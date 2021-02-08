import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Number(new Big(numberOne || 0));
  const num2 = Number(new Big(numberTwo || 0));
  switch (operation) {
    case '-':
      return { total: String(num1 - num2), next: '=', operation: null };
    case '+':
      return { total: String(num1 + num2), next: '=', operation: null };
    case 'X':
      return { total: String(num1 * num2), next: '=', operation: null };
    case '÷':
      if (num2 !== 0) {
        return { total: String(num1 / num2), next: '=', operation: null };
      }
      return { total: 'Math error', next: '=', operation: null };
    case '%':
      return { total: String(num1 / num2), next: '=', operation: null };
    default:
      return { total: num1, next: num2, operation: null };
  }
};

export default operate;
