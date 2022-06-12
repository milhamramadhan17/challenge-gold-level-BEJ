const getUsers = "SELECT * FROM users";
const getUsersById = "SELECT * FROM users WHERE id = $1";
const checkEmailExists = "SELECT s FROM users s WHERE s.email = $1";
const checkNameExists = "SELECT s FROM users s WHERE (s.name, s.password) =  ($1, $2)";
const addUsers = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";
const removeUser = "DELETE FROM users WHERE id = $1";
const updateUser = "UPDATE users SET name = $1 WHERE id = $2";
const updatePassword = "UPDATE users SET password = $1 WHERE id = $2";
const updateEmail = "UPDATE users SET email = $1 WHERE id = $2";

module.exports = {
    getUsers,
    getUsersById,
    checkEmailExists,
    checkNameExists,
    addUsers,
    removeUser,
    updateUser,
    updatePassword,
    updateEmail
}