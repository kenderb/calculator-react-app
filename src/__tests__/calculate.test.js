import calculate from '../logic/calculate';

describe('Calculate method', () => {
  it('Should be a function', () => {
    expect(typeof calculate).toEqual('function');
  });
  it('Should acept and object and a name as arguments btnName = -', () => {
    expect(calculate({ total: 30, next: 2, operation: '-' })).toEqual({ next: '0', operation: '-', total: 30 });
  });
  it('Should acept and object and a name as arguments btnName = X', () => {
    expect(calculate({ total: 30, next: 2, operation: 'X' })).toEqual({ next: '0', operation: 'X', total: 30 });
  });
  it('Should acept and object and a name as arguments btnName = +', () => {
    expect(calculate({ total: 30, next: 2, operation: '+' })).toEqual({ next: '0', operation: '+', total: 30 });
  });
  it('Should acept and object and a name as arguments btnName = %', () => {
    expect(calculate({ total: 30, next: 2, operation: '%' })).toEqual({ total: '0.3', next: '=', operation: null });
  });
  it('Should acept and object and a name as arguments btnName = ÷', () => {
    expect(calculate({ total: 30, next: 2, operation: '÷' })).toEqual({ next: '0', operation: '÷', total: 30 });
  });
  it('Should acept and object and a name as arguments btnName = e', () => {
    expect(calculate({ total: 30, next: 2, operation: 'e' })).toEqual({ next: null, total: '30e' });
  });

  it('should use the buttonName argument to mutate the calculator’s data object con un valor negativo', () => {
    expect(calculate({ total: 30, next: -1, operation: '+/-' })).toEqual({ total: '-30' });
  });
  it('should use the buttonName argument to mutate the calculator’s data object con un valor positivo', () => {
    expect(calculate({ total: 30, next: 1, operation: '+/-' })).toEqual({ total: '-30' });
  });
});
