const express = require('express');
const router = express.Router();
const danesController = require('../controllers/danesController');

// GET
router.get('/', danesController.getAllDanes);

router.get('/:id', danesController.getDanById);

router.get('/na/:NombreApellido', danesController.getDanByNombreApellido);

router.get('/dni/:dni', danesController.getDanByDni);

// POST
router.post('/', danesController.createDan);

// PUT
router.put('/:id', danesController.updateDan);

router.put('/na/:NombreApellido', danesController.updateDanByNombreApellido);

// DELETE
router.delete('/:id', danesController.deleteDan);

module.exports = router;
