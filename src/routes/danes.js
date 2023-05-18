const express = require('express');
const router = express.Router();
const danesController = require('../controllers/danesController');

// GET
router.get('/danes', danesController.getAllDanes);

router.get('/danes/:id', danesController.getDanById);

router.get('/danes/buscar', danesController.getDanByNombreApellido);

// POST
router.post('/danes', danesController.createDan);

// PUT
router.put('/danes/:id', danesController.updateDan);

router.put('/danes/:NombreApellido', danesController.updateDanByNombreApellido);

// DELETE
router.delete('/danes/:id', danesController.deleteDan);

module.exports = router;
