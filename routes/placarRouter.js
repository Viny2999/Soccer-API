const express = require('express');
const router = express.Router();
const placarService = require('../services/placarService');

router.get('/api/placar/all', placarService.getAllPlacar);

router.get('/api/placar/:id', placarService.getOnePlacarId);

router.get('/api/placar', placarService.getOnePlacarQueryString);

router.post('/api/placar', placarService.postPlacar);

router.put('/api/placar/:id', placarService.putPlacar);

router.delete('/api/placar/:id', placarService.deletePlacar);

module.exports = router;
