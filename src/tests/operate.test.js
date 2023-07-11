import operate from '../components/logic/operate';

describe('operate', () => {
  test('performs addition correctly', () => {
    const result = operate('2', '3', '+');
    expect(result).toBe('5');
  });

  test('performs subtraction correctly', () => {
    const result = operate('5', '2', '-');
    expect(result).toBe('3');
  });
});
