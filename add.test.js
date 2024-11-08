const add = require('./add');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
test('throws error when arguments are not numbers', () => {
    expect(() => add('1', 2)).toThrow('Invalid arguments');
  });
  