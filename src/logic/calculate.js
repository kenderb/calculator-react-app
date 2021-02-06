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
    return { total: totalResult, next, operation };
  }
  if (operation === 'AC') return { total: '0' };
  if (operation.match(/[0-9]/g)) {
    const newTotal = '';
    let newOpera = '';
    if (total === '0' || total === 0 || total === null) newOpera = newTotal + operation;
    else newOpera = total + operation;
    return { total: newOpera };
  }
  return operate(total, next, operation);
};

export default calculate;
