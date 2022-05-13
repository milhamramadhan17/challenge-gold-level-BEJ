const { Router } = require('express');
const controller = require('./controller');
const res = require('express/lib/response');
const { getUsers } = require('../db');

const router = Router();

router.get('/', () => controller.getUsers);
router.get('/', () => controller.getItems)
router.get('/', () => controller.getOrders)

module.exports = router;