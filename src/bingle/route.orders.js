const { Router } = require('express');
const controller = require('./controller');

const routerOrders = Router();

routerOrders.get('/orders', controller.getOrders)

module.exports = routerOrders;