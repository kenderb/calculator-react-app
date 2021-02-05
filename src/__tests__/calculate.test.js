import calculate from '../logic/calculate';

describe('Calculate method', () => {
  it('Should be a function', () => {
    expect(typeof calculate).toEqual('function');
  });
  it('Should acept and object and a name as arguments', () => {
    expect(calculate({ total: 30, next: 2, operation: 'X' }, '0')).toEqual({ total: 30, next: 2 });
  });

  it('should use the buttonName argument to mutate the calculator’s data object con un valor negativo', () => {
    expect(calculate({ total: 30, next: -1, operation: 'X' }, '+/-')).toEqual({ total: -30, next: 1 });
  });
  it('should use the buttonName argument to mutate the calculator’s data object con un valor positivo', () => {
    expect(calculate({ total: 30, next: 1, operation: 'X' }, '+/-')).toEqual({ total: -30, next: -1 });
  });
});
