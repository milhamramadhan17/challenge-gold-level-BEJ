const { Router } = require('express');
const controller = require('../controller/users');

const routerUsers = Router();

routerUsers.get('/users', controller.getUsers);
routerUsers.post('/register', controller.addUsers);
routerUsers.post('/login', controller.login)
routerUsers.get('/users/:id', controller.getUsersById);
routerUsers.put('/users/:id', controller.updateUser)
routerUsers.delete('/users/:id', controller.removeUser);

module.exports = routerUsers;