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
  if (operation === '0'
  || operation === '1'
  || operation === '2'
  || operation === '3'
  || operation === '4'
  || operation === '5'
  || operation === '6'
  || operation === '7'
  || operation === '8'
  || operation === '9') {
    const newTotal = '';
    let newOpera = '';
    if (total === null) newOpera = newTotal + operation;
    else newOpera = total + operation;
    return { total: newOpera };
  }
  return operate(total, next, operation);
};

export default calculate;
