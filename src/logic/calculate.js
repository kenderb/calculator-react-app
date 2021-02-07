import operate from './operate';

const calculate = ({ total, next, operation }, typeOperation) => {
  if (operation === '+/-') {
    const newTotal = (total) * -1;
    const newNext = (next) * -1;
    if (typeOperation) return { next: newNext };
    return { total: newTotal };
  }
  if (operation === '+'
  || operation === '-'
  || operation === 'X'
  || operation === '÷') {
    return { next: 0, operation };
  }
  if (operation === '=') {
    if (next === '.' || total === '.' || total === 'Math error') return { total: '0', next: null, operation: null };
    if (next === '=') return operate(total, null, typeOperation);
    return operate(total, next, typeOperation);
  }
  if (operation === 'AC') return { total: '0', next: null, operation: null };
  if (operation === '%') {
    if (typeOperation) return operate(next, 100, operation);
    return operate(total, 100, operation);
  }
  if (operation.includes('.')) {
    const zeroTotal = total || '0';
    const zeroNext = next || '0';
    if (zeroTotal.toString().includes('.') && !typeOperation) return { total, next };
    if (zeroNext.toString().includes('.') && typeOperation) return { total, next, typeOperation };
  }
  if (operation.match(/[0-9]|./g)) {
    const newTotal = '';
    let newOpera = '';
    if (typeOperation) {
      if (next === '0' || next === 0 || next === null || next === '=') newOpera = newTotal + operation;
      else newOpera = next + operation;
      return { next: newOpera };
    }
    if (total === '0' || total === 0 || total === null || next === '=') newOpera = newTotal + operation;
    else newOpera = total + operation;
    return { total: newOpera, next: null };
  }
  return operate(total, next, operation);
};

export default calculate;
