const fetchData = require('./fetchData');
const axios = require('axios');

// Mock axios.get function
jest.mock('axios');

test('should fetch data from the API', async () => {
    const mockData = { data: 'mocked data' };
    axios.get.mockResolvedValue(mockData);

    const data = await fetchData();
    expect(data).toBe('mocked data');
});
