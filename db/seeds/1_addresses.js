exports.seed = (knex) => {
  return knex('adresses').del()
  .then(() => {
    return knex('adresses').insert([
      {
        id: 1,
        line_1: '7493 42nd Ave',
        line_2: '',
        city: 'Seattle',
        zip: 98102,
      },
      {
        id: 2,
        line_1: '1234 Washtenaw Ave',
        line_2: '',
        city: 'Ypislanti',
        zip: 48185,
      },
      {
        id: 3,
        line_1: '10038 Beatrice St',
        line_2: 'Apt 204',
        city: 'Lake City',
        zip: 98109,
      },
    ]);
  });
};
