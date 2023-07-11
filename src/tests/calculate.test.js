import calculate from '../components/logic/calculate';

describe('calculate', () => {
  test('returns updated object with AC button', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('updates object with number button', () => {
    const result = calculate({ total: '5', next: null, operation: '-' }, '2');
    expect(result).toEqual({
      total: '5',
      next: '2',
      operation: '-',
    });
  });

  test('updates object with decimal button', () => {
    const result = calculate({ total: '5', next: null, operation: null }, '.');
    expect(result).toEqual({
      total: '5',
      next: '5.',
      operation: null,
    });
  });

  test('do the operation', () => {
    const result = calculate({ total: '5', next: '4', operation: '+' }, '=');
    expect(result).toEqual({
      total: '9',
      next: null,
      operation: null,
    });
  });

  test('Change sign', () => {
    const result = calculate({ total: '5', next: null, operation: null }, '+/-');
    expect(result).toEqual({
      total: '-5',
      next: null,
      operation: null,
    });
  });
  test('Change sign of next', () => {
    const result = calculate({ total: '5', next: '8', operation: '+' }, '+/-');
    expect(result).toEqual({
      total: '5',
      next: '-8',
      operation: '+',
    });
  });
  test('pressed an operation after pressing =', () => {
    const result = calculate({ total: '5', next: null, operation: null }, '+');
    expect(result).toEqual({
      total: '5',
      next: null,
      operation: '+',
    });
  });
  test('pressed an operation button and there is an existing operation', () => {
    const result = calculate({ total: '5', next: null, operation: '-' }, '+');
    expect(result).toEqual({
      total: '5',
      next: null,
      operation: '+',
    });
  });
});
