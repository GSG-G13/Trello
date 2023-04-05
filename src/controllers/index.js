const express = require('express');
const router = express.Router();
const {getEmployees} = require('./Employee');

router.get('/employees', getEmployees);

module.exports = router;
