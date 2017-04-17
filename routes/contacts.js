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

// show single contact
router.get('/:id', (req, res) => {
  const id = req.params.id;
  db('contacts').where({ id }).first()
  .then((contact) => {
    res.render('contacts/show', { contact });
  });
});

// route to add new contact.
router.get('new', (req, res) => {
  res.render('contacts/shared/form');
});

// route to edit exsisting contact.
router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  db('contacts').select('*').where({ id }).first()
  .then((contact) => {
    res.render('contacts/edit', { contact });
  });
});

// render all contacts
router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.from('contacts').where({ id }).first()
  .innerJoin('adresses', 'contacts.adress_id', 'adresses.id')
  .then(() => {
    res.render('contact/show');
  });
});

// delete a contact
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db('contacts').del().where({ id })
  .then(() => {
    res.redirect('contacts/index');
  });
});

// router.put('/id', (req, res) => {
//   const id = req.params.id;
//   const contact = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     phone_number: req.body.phone_number,
//     email_address: req.body.email_address,
//     image_url: req.body.image_url,
//   };
//   const address = {
//     line_1: req.body.line_1,
//     line_2: req.body.line_2,
//     city: req.body.city,
//     zip: req.body.zip,
//   }
//   .then((address) => {
//     db('adresses').update(address, '*').where({ id })
//     .then((updatedAddress) => {
//       const updatedAddressId = updatedAddress[0].id;
//     });
//   })
//   .then((contact) => {
//     db('contacts').update(contact, '*').where({ id })
//     .then((updatedContact) => {
//       res.redirect('/contacts/${updatedID}');
//     });
//   });

module.exports = router;
