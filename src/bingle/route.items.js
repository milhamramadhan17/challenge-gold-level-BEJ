const { Router } = require('express');
const controller = require('./controller');

const routerItems = Router();

routerItems.get('/items', controller.getItems)
routerItems.post('/items', controller.addItems)
routerItems.get('/items/:id', controller.getItemsById)

module.exports = routerItems;