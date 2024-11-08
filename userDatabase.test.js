const { addUser, getUserCount, resetDatabase } = require('./userDatabase');
beforeEach(() => { resetDatabase(); });
test('adds new users to the database', () => {
    addUser('John');
    addUser('Jack');
    expect(getUserCount()).toBe(2);
});
