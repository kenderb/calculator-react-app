import operate from './operate';

const calculate = ({ total, next, operation }) => {
  if (operation === '+/-') {
    const newTotal = (total) * -1;
    const newNext = (next) * -1;
    return { total: newTotal, next: newNext };
  }
  if (operation === '+'
  || operation === '-'
  || operation === 'X'
  || operation === '%'
  || operation === '÷') {
    const totalResult = operate(total, next, operation);
    return { total: totalResult };
  }
  if (typeof (operation) === 'number') {
    console.log(operation);
    return operate(operation, next, operation);
  }
  return operate(total, next, operation);
};

export default calculate;
