const { Router } = require('express');
const controller = require('./controller');

const routerUsers = Router();

routerUsers.get('/users', controller.getUsers);


module.exports = routerUsers;