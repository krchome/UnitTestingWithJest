const formatDate = require('./formatDate');
test('formats the date correctly', () => {
    const result = formatDate(new Date('2024-01-01'));
    expect(result).toBe('January 1, 2024');
});
