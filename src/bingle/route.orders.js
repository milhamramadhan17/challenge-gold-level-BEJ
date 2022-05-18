const { Router } = require('express');
const controller = require('./controller');

const routerOrders = Router();

routerOrders.get('/orders', controller.getOrders)
routerOrders.get('/orders/id:', controller.getItemsById)
routerOrders.post('/orders', controller.addItems)

module.exports = routerOrders;