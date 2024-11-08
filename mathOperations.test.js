// Import the add function
const add = require('./mathOperations');

// Test to check if the add function returns the correct total
test('returns correct total when adding two numbers', () => {
    expect(add(1, 2)).toBe(3); // 1 + 2 should equal 3
});
