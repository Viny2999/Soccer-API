const express = require('express');
const router = express.Router();
const timeService = require('../services/timeService');

router.get('/api/time/all', timeService.getAllTime);

router.get('/api/time/:id', timeService.getOneTimeId);

router.get('/api/time', timeService.getOneTimeQueryString);

router.post('/api/time', timeService.postTime);

router.put('/api/time/:id', timeService.putTime);

router.delete('/api/time/?', timeService.deleteTime);

module.exports = router;
