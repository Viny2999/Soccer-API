const express = require('express');
const router = express.Router();
const mainService = require('../services/mainService');

router.get('/api', mainService.getMain);

module.exports = router;
