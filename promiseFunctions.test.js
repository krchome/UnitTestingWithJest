const fetchData = require('./promiseFunctions');

test('fetches data successfully (promise resolves)', () => {
    return expect(fetchData(true)).resolves.toBe('data received');
});

test('fails to fetch data (promise rejects)', () => {
    return expect(fetchData(false)).rejects.toBe('error occurred');
});
