const express = require('express');
const db = require('../db');

const router = express.Router();


// get all contacts.
router.get('/', (req, res) => {
  db.from('contacts').select('*')
  .innerJoin('adresses', 'contacts.address_id', 'adresses.id')
  .then((contacts) => {
    res.render('contacts/index', { contacts });
  });
});

// route to add new contact.
router.get('/contact/new', (req, res) => {
  res.render('contact/form');
});

// route to edit exsisting contact.
router.get('/id/edit', (req, res) => {
  res.render('contact/form');
});

//render all contacts
router.get('/id', (req, res) => {
  const id = req.params.id;
  db.from('contacts').where({ id }).first()
  .innerJoin('adresses', 'contacts.adress_id', 'adresses.id')
  .then((contact) => {
    res.render('contact/show');
  });
});


module.exports = router;
