const calculate = ({ total, next }, btnName) => {
  if (btnName === '+/-') {
    const newTotal = (total) * -1;
    const newNext = (next) * -1;
    return { total: newTotal, next: newNext };
  }
  return { total, next };
};

export default calculate;
