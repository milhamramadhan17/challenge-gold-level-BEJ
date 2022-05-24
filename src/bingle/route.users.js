const { Router } = require('express');
const controller = require('./controller');

const routerUsers = Router();

routerUsers.get('/users', controller.getUsers);
routerUsers.post('/users', controller.addUsers);
routerUsers.get('/users/:id', controller.getUsersById);
routerUsers.put('/users/:id', controller.updateUser)
routerUsers.delete('/users/:id', controller.removeUser);

module.exports = routerUsers;