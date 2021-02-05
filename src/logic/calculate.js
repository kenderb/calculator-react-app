import operate from './operate';

const calculate = ({ total, next }, btnName) => {
  if (btnName === '+/-') {
    const newTotal = (total) * -1;
    const newNext = (next) * -1;
    return { total: newTotal, next: newNext };
  }
  if (btnName === '+'
  || btnName === '-'
  || btnName === 'X'
  || btnName === '%'
  || btnName === '÷') {
    const totalResult = operate(total, next, btnName);
    return { total: totalResult };
  }
  return false;
};

export default calculate;
