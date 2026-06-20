const express = require('express');
const router = express.Router();
const { calcularCostos } = require('../controllers/envioController');

// GET /api/envios/costos?fechaInicio=...&fechaFin=...
router.get('/costos', calcularCostos);

module.exports = router;
