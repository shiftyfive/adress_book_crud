exports.up = (knex) => {
  return knex.schema.createTable('adresses', table => {
  table.increments()
  table.string('line_1');
  table.string('line_2');
  table.string('city');
  table.integer('zip');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('adresses');
};
