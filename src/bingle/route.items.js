const { Router } = require('express');
const controller = require('./controller');

const routerItems = Router();

routerItems.get('/items', controller.getItems)

module.exports = routerItems;