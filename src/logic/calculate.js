import Big from 'big.js';

const calculate = ({ total, next }, btnName) => {
  if (btnName === '+/-') {
    const newTotal = (total) * -1;
    const newNext = (next) * -1;
    return { newTotal, newNext };
  }
  return true;
};

export default calculate;
