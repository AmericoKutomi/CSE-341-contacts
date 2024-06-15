const express = require('express');

const contacsController = require('../controllers/contacts.controller');

const router = express.Router();

// GET list of contacts
router.get('/', contacsController.getAll);

// GET list of contacts
router.get('/:id', contacsController.getSingle);

module.exports = router;