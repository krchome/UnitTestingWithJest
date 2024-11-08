const fetchData = require('./asynccode');
test('fetches data successfully', async () => {
    const data = await fetchData();
    expect(data).toBe('data');
  });
  