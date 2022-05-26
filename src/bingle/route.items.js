const { Router } = require('express');
const controller = require('./controller');

const routerItems = Router();

routerItems.get('/items', controller.getItems)
routerItems.post('/items', controller.addItems)
routerItems.get('/items/:id', controller.getItemsById)
routerItems.delete('/items/:id', controller.removeItems)
routerItems.put('/items/:id', controller.updateItems)

module.exports = routerItems;