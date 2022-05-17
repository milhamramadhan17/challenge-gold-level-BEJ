const { Router } = require('express');
const controller = require('./controller');

const routerUsers = Router();

routerUsers.get('/users', controller.getUsers);
routerUsers.get('/users/:id', controller.getUsersById);

module.exports = routerUsers;