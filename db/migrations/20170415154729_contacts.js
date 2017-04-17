function createContactsTable(table) {
  table.increments();
  table.integer('address_id').notNullable();
  table.string('first_name').notNullable();
  table.string('last_name');
  table.string('phone_number').notNullable();
  table.string('email_address');
  table.text('image_url');
}


exports.up = knex => knex.schema.createTable('contacts', createContactsTable);

exports.down = knex => knex.schema.dropTable('contacts');
