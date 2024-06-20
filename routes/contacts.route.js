const router = require('express').Router();

const contacsController = require('../controllers/contacts.controller');

// GET list of contacts
router.get('/', contacsController.getAll);

// GET list of contacts
router.get('/:id', contacsController.getSingle);

// POST create a new contact
router.post('/', contacsController.createContact);

// PUT update an existing contact
router.put('/:id', contacsController.updateContact);

// DELETE delete an existing contact
router.delete('/:id', contacsController.deleteContact);

module.exports = router;