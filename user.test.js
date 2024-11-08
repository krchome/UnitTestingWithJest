const getUser = require('./user');
describe.only('User Object Test', () => {
    test('should return user object with name, age, and location', () => {
        const user = getUser();
        expect(user).toHaveProperty('name', 'John');
        expect(user).toHaveProperty('age', 30);
        expect(user).toHaveProperty('location', 'New York');
    });
    
});
test('should return correct user object', () => {
    const user = getUser();
    expect(user).toEqual({ name: 'John', age: 30, location: 'New York' });
});




