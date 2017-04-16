
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(() => {
      // Inserts seed entries
      return knex('contacts').insert([
        {
          id: 1,
          address_id: 1,
          first_name: 'Joshua',
          last_name: 'Warren',
          phone_number: '555-555-555',
          email_address: 'jdubz@awesometastes.com',
          image_url: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAriAAAAJDg3Yjk2MzkxLTYyNmEtNDI5Ny04MjBjLTE1Mzc0ZTlhNGRkMA.jpg',
        },
        {
          id: 2,
          address_id: 2,
          first_name: 'Johnathan',
          last_name: 'Shihedeh',
          phone_number: '734-555-5555',
          email_address: 'jons@whatupfatlip.com',
          image_url: 'https://pbs.twimg.com/profile_images/3695727958/a24e06cb759f561ea18dd561d5f5d539.jpeg',
        },
        {
          id: 3,
          address_id: 3,
          first_name: 'Julie',
          last_name: 'joppich',
          phone_number: '313-555-555',
          email_address: 'julie@bestDBadmin.com',
          image_url: 'http://sahomeguide.net/wp-content/uploads/2013/05/best-realtor-in-san-antonio-Kristen-Schramme-of-Keller-Williams-agent-web.jpg',
        },
      ]);
    });
};
