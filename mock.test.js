const fetchData = require('./mock');
test('fetches mocked data', () => {
    const data = fetchData();
    expect(data).toBe('mocked data');
  });
  