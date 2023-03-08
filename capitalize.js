// Import the function to be tested
const capitalize = require('./capitalize');

describe('capitalize function', () => {
  test('capitalizes the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });

  test('returns an empty string when given an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('returns the same string if the first character is already capitalized', () => {
    expect(capitalize('Capital')).toBe('Capital');
    expect(capitalize('Already capitalized')).toBe('Already capitalized');
  });
});
