const subtract = require('./mathFunctions');

test('subtracts numbers correctly', () => {
    const result = subtract(10, 4);
    expect(result).toBe(6);
    expect(result).not.toBe(5);
    expect(result).toBeGreaterThan(5);
    expect(result).toBeLessThan(7);
});
