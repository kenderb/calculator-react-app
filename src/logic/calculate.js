import operate from './operate';

const calculate = ({ total, next, operation }, typeOperation) => {
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
    return { operation };
  }
  if (operation === '=') return operate(total, next, operation);
  if (operation === 'AC') return { total: '0', next: 0, operation: null };
  if (operation.match(/[0-9]/g)) {
    if (typeOperation) {
      const newTotal = '';
      let newOpera = '';
      if (next === '0' || next === 0 || next === null) newOpera = newTotal + operation;
      else newOpera = next + operation;
      return { next: newOpera };
    }
    const newTotal = '';
    let newOpera = '';
    if (total === '0' || total === 0 || total === null) newOpera = newTotal + operation;
    else newOpera = total + operation;
    return { total: newOpera };
  }
  return operate(total, next, operation);
};

export default calculate;
