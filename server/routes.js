const express = require('express');
const router = express.Router();

const customer = require('./controllers/customer.controller');

// Customer API routes
router.get('/customer', customer.get);
router.get('/customer/:id', customer.find);
router.post('/customer', customer.create);
router.put('/customer/:id', customer.update);
router.delete('/customer/:id', customer.delete);

module.exports = router;