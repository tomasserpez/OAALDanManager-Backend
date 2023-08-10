const express = require('express');
const router = express.Router();
const danesController = require('../controllers/danesController');
const authJwt = require('../middleware/authJwt');

// GET
router.get('/', authJwt.verifyToken, danesController.getAllDanes);

router.get('/getIds', authJwt.verifyToken, danesController.getAllIdDanes);

router.get('/:id', authJwt.verifyToken, danesController.getDanById);

router.get('/dni/:dni', authJwt.verifyToken, danesController.getDanByDni);

// POST
router.post('/', authJwt.verifyToken, danesController.createDan);

// PUT
router.put('/:id', authJwt.verifyToken, danesController.updateDan);

// DELETE
router.delete('/:id', authJwt.verifyToken, danesController.deleteDan);

module.exports = router;
