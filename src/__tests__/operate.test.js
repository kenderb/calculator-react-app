import operate from '../logic/operate';

describe('Operate method', () => {
  it('Should be a function', () => {
    expect(typeof operate).toEqual('function');
  });
  it('should perform a simple math operation. operation == "+"', () => {
    const results = operate(10, 10, '+');
    expect(results).toEqual(20);
  });
  it('should perform a simple math operation. operation == "mill" to be false', () => {
    const results = operate(10, 10, 'mill');
    expect(results).toEqual(false);
  });
  it('should perform a simple math operation. operation == "-"', () => {
    const results = operate(10, 10, '-');
    expect(results).toEqual(0);
  });
  it('should perform a simple math operation. operation == "X"', () => {
    const results = operate(10, 10, 'X');
    expect(results).toEqual(100);
  });
  it('should perform a simple math operation. operation == "÷"', () => {
    const results = operate(10, 10, '÷');
    expect(results).toEqual(1);
  });
  it('should retrun invalid if the numbertwo is zero. operation == "÷"', () => {
    const results = operate(10, 0, '÷');
    expect(results).toEqual('no valid operation');
  });
  it('should perform a simple math operation. operation == "%"', () => {
    const results = operate(10, 40, '%');
    expect(results).toEqual(4);
  });
});
