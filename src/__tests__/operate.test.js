import operate from '../logic/operate';

describe('Operate method', () => {
  it('Should be a function', () => {
    expect(typeof operate).toEqual('function');
  });
  it('should perform a simple math operation. operation == "+"', () => {
    const results = operate(10, 10, '+');
    expect(results).toEqual({ next: '=', operation: null, total: '20' });
  });
  it('should perform a simple math operation. operation == "mill" to be false', () => {
    const results = operate(10, 10, 'mill');
    expect(results).toEqual({ next: 10, operation: null, total: 10 });
  });
  it('should perform a simple math operation. operation == "-"', () => {
    const results = operate(10, 10, '-');
    expect(results).toEqual({ next: '=', operation: null, total: '0' });
  });
  it('should perform a simple math operation. operation == "X"', () => {
    const results = operate(10, 10, 'X');
    expect(results).toEqual({ next: '=', operation: null, total: '100' });
  });
  it('should perform a simple math operation. operation == "÷"', () => {
    const results = operate(10, 10, '÷');
    expect(results).toEqual({ next: '=', operation: null, total: '1' });
  });
  it('should retrun invalid if the numbertwo is zero. operation == "÷"', () => {
    const results = operate(10, 0, '÷');
    expect(results).toEqual({ next: '=', operation: null, total: 'Math error' });
  });
  it('should perform a simple math operation. operation == "%"', () => {
    const results = operate(10, 40, '%');
    expect(results).toEqual({ next: '=', operation: null, total: '0.25' });
  });
});
