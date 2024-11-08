const calculateTotalPrice = require('./priceCalculator');
test('calculates total price correctly for 5 items at $2 each', () => {
    const total = calculateTotalPrice(5, 2);
  expect(total).toBe(10);
});
