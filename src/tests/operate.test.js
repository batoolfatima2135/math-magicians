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

  test('performs multiplication correctly', () => {
    const result = operate('2', '3', 'x');
    expect(result).toBe('6');
  });
  test('performs division correctly', () => {
    const result = operate('6', '2', '÷');
    expect(result).toBe('3');
  });
  test('handles division by 0 correctly', () => {
    const result = operate('5', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });
  test('performs modulo correctly', () => {
    const result = operate('5', '2', '%');
    expect(result).toBe('1');
  });
  test('handles modulo with division by 0 correctly', () => {
    const result = operate('5', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });
  test('throws an error for unknown operation', () => {
    expect(() => operate('2', '3', 'foo')).toThrowError("Unknown operation 'foo'");
  });
});
