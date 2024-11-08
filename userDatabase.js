let userDatabase = [];
function addUser(username) {
    userDatabase.push(username);
}
function getUserCount() {
    return userDatabase.length;
}
function resetDatabase() {
    userDatabase = [];
}
module.exports = { addUser, getUserCount, resetDatabase };
