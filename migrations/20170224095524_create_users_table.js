exports.up = function(knex) {
  return knex.schema.createTable('users', function(t) {
    t.increments('id').primary();
    t.string('name').notNull();
    t.string('username').nullable().defaultTo(null).unique();
    t.string('email').notNull().unique();
    t.string('password').notNull();
    t.boolean('is_admin').defaultTo(false);
    t.json('profileData').nullable();
    t.dateTime('dt_created').notNull();
    t.dateTime('dt_updated').nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
