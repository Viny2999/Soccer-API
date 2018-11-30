const express = require('express');
const router = express.Router();
const placarService = require('../services/placarService');

router.get('/api/placar', placarService.getAllPlacar);

router.get('/api/placar/:id', placarService.getOnePlacarId);

router.post('/api/placar', placarService.postPlacar);

router.put('/api/placar/:id', placarService.putPlacar);

router.delete('/api/placar/:id', placarService.deletePlacar);

module.exports = router;
