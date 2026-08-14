const express = require('express');
const router = express.Router();
const { createOrder } = require('../controller/createOrder');


router.post('/', createOrder);

module.exports = router;
