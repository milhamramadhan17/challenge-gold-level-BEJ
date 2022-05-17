const getUsers = "SELECT * FROM users";
const getUsersById = "SELECT * FROM users WHERE id = $1";

module.exports = {
    getUsers,
    getUsersById
}