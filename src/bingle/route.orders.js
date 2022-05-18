const { Router } = require('express');
const controller = require('./controller');

const routerOrders = Router();

routerOrders.get('/orders', controller.getOrders)
routerOrders.get('/orders/:id', controller.getOrdersById)
routerOrders.post('/orders', controller.addOrder)

module.exports = routerOrders;