const express = require('express');
const router = express.Router();
const { getServerStatus } = require('../controller/appController');


router.get('/', getServerStatus);

module.exports = router;
