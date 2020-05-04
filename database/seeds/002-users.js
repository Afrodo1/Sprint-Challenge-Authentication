
exports.seed = function(knex) {
  return knex('users').insert([
    { 
      username: 'orange',
      password: 'password'
    },

    { 
      username: 'banana',
      password: 'password'
    },

    { 
      username: 'kiwi',
      password: 'password'
    },

    {
      username: 'mango', 
      password: 'password'
    },
  ]);
};