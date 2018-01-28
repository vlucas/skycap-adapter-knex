'use strict';

const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  let now = new Date();
  let hashedPassword = bcrypt.hashSync('password', 10);

  return Promise.all([
      knex.raw("TRUNCATE TABLE users CASCADE"),
    ]).then(() => Promise.all([
      knex.raw("SELECT setval(pg_get_serial_sequence('users', 'id'), coalesce(max(id),0) + 1, false) FROM users"),
    ]))
    .then(() => Promise.all([
      // Inserts seed entries
      knex('users').insert(
        { name: 'Admin User', email: 'admin@example.com', password: hashedPassword, is_admin: true, dt_created: now },
        { name: 'Example User', email: 'user@example.com', password: hashedPassword, is_admin: false, dt_created: now },
        { name: 'Chester User', email: 'chester@tester.com', password: hashedPassword, is_admin: false, dt_created: now }
      )
    ]));
};
