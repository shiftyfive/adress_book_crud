const express = require('express');
const db = require('../db');

const router = express.Router();


/* GET users listing. */
router.get('/', (req, res) => {
  db.from('contacts').select('*')
  .innerjoin('adresses', 'contacts.address_id', 'adresses.id')
  .then((contacts) => {
    res.render('contacts/index', { contacts });
  });
});

module.exports = router;
