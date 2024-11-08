const getFruits = require('./arrayFunctions');
//describe.only('Fruits Array Test', () => {
test.only('should contain apple, banana, and orange', () => {
    const fruits = getFruits();
    expect(fruits).toContain('apple');
    expect(fruits).toContain('banana');
    expect(fruits).toContain('orange');
});

test('should return correct array of fruits', () => {
    const fruits = getFruits();
    expect(fruits).toEqual(['apple', 'banana', 'orange']);
})
//});
