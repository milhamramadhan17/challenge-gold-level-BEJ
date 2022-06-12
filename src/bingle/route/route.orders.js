const { Router } = require('express');
const controller = require('../controller/orders');

const routerOrders = Router();

routerOrders.get('/orders', controller.getOrders)
routerOrders.get('/orders/:id', controller.getOrdersById)
routerOrders.post('/orders', controller.addOrder)
routerOrders.delete('/orders/:id', controller.removeOrder)
routerOrders.put('/orders/:id', controller.updateOrder)

module.exports = routerOrders;