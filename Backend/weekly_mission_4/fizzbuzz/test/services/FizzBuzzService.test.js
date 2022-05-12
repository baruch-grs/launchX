const FB = require('../../lib/services/FizzBuzzService');

describe('Suite Test for FizzBuzzService class', () => {
  test('Case 1. Tests for applyValidationInExplorer method', () => {
    const explorer = { name: 'explorer1', score: 1 };
    const result = FB.applyValidationInExplorer(explorer);
    expect(result).toBeDefined();
    expect(result.trick).toBe(1);
  });
  test('Case 2. Test for applyValidationInExplorer method, second use case assigning FIZZ word to trick', () => {
    const explorer = { name: 'explorer2', score: 3 };
    const result = FB.applyValidationInExplorer(explorer);
    expect(result).toBeDefined();
    expect(result.trick).toBe('FIZZ');
  });
  test('Case 3. Test for applyValidationInExplorer method, third use case assigning BUZZ word to trick', () => {
    const explorer = { name: 'julio', score: 5 };
    const result = FB.applyValidationInExplorer(explorer);
    expect(result).toBeDefined();
    expect(result.trick).toBe('BUZZ');
  });
});