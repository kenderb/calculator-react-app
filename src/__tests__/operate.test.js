import operate from '../logic/operate';

describe('Operate method', () => {
  it('Should be a function', () => {
    expect(typeof operate).toEqual('function');
  });
  it('should perform a simple math operation. operation == "+"', () => {
    const results = operate(10, 10, '+');
    expect(results).toEqual(20);
  });
  it('should perform a simple math operation. operation == "-"', () => {
    const results = operate(10, 10, '-');
    expect(results).toEqual(0);
  });
});
