const fetchData = jest.fn(() => Promise.resolve('mock data'));
test('returns mock data', async () => {
    const data = await fetchData();
    expect(data).toBe('mock data');
});
