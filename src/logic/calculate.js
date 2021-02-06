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
    return { next: 0, operation };
  }
  if (operation === '=') {
    if (next === '=') return operate(total, null, typeOperation);
    return operate(total, next, typeOperation);
  }
  if (operation === 'AC') return { total: '0', next: null, operation: null };
  if (operation.match(/[0-9]/g)) {
    if (typeOperation) {
      const newTotal = '';
      let newOpera = '';
      if (next === '0' || next === 0 || next === null || next === '=') newOpera = newTotal + operation;
      else newOpera = next + operation;
      return { next: newOpera };
    }
    const newTotal = '';
    let newOpera = '';
    if (total === '0' || total === 0 || total === null || next === '=') newOpera = newTotal + operation;
    else newOpera = total + operation;
    return { total: newOpera, next: null };
  }
  return operate(total, next, operation);
};

export default calculate;
