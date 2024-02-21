const express = require('express');
const router = express.Router();
const profesionesController = require('../controllers/profesionesController');

// Endpoint para obtener todas las profesiones con los aspirantes asociados
router.get('/profesiones', profesionesController.getAllProfesiones);

module.exports = router;
