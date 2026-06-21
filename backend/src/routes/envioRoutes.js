const express = require('express');
const router = express.Router();
const { calcularCostos } = require('../controllers/envioController');

router.get('/costos', calcularCostos);

module.exports = router;
