import operate from '../logic/calculate';

describe('Operate method', () => {
  it('Should be a function', () => {
    expect(typeof operate).toEqual('function');
  });
});
