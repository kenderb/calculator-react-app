import calculate from '../logic/calculate';

describe('Calculate method', () => {
  it('Should be a function', () => {
    expect(typeof calculate).toEqual('function');
  });
  it('Should acept and object and a name as arguments btnName = -', () => {
    expect(calculate({ total: 30, next: 2 }, '-')).toEqual({ total: 28 });
  });
  it('Should acept and object and a name as arguments btnName = X', () => {
    expect(calculate({ total: 30, next: 2 }, 'X')).toEqual({ total: 60 });
  });
  it('Should acept and object and a name as arguments btnName = +', () => {
    expect(calculate({ total: 30, next: 2 }, '+')).toEqual({ total: 32 });
  });
  it('Should acept and object and a name as arguments btnName = %', () => {
    expect(calculate({ total: 30, next: 2 }, '%')).toEqual({ total: 0.6 });
  });
  it('Should acept and object and a name as arguments btnName = ÷', () => {
    expect(calculate({ total: 30, next: 2 }, '÷')).toEqual({ total: 15 });
  });
  it('Should acept and object and a name as arguments btnName = e', () => {
    expect(calculate({ total: 30, next: 2 }, 'e')).toEqual(false);
  });

  it('should use the buttonName argument to mutate the calculator’s data object con un valor negativo', () => {
    expect(calculate({ total: 30, next: -1 }, '+/-')).toEqual({ total: -30, next: 1 });
  });
  it('should use the buttonName argument to mutate the calculator’s data object con un valor positivo', () => {
    expect(calculate({ total: 30, next: 1 }, '+/-')).toEqual({ total: -30, next: -1 });
  });
});
