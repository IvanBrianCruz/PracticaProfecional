const express = require('express');
const router = express.Router();
const aspirantesController = require('../controllers/aspirantesController');

router.get('/aspirantes', aspirantesController.getAllAspirantes);

// Ruta para obtener un aspirante por su ID
router.get('/aspirantes/:id', aspirantesController.getAspiranteById);

module.exports = router;
