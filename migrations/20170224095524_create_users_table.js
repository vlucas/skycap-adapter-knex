exports.up = function up(knex) {
  return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .then(() => {
      return knex.schema.createTable('users', function(t) {
        t.uuid('id').primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
        t.string('name').notNull();
        t.string('username').nullable().defaultTo(null).unique();
        t.string('email').notNull().unique();
        t.string('password').notNull();
        t.boolean('is_admin').defaultTo(false);
        t.json('profileData').nullable();
        t.dateTime('dt_created').notNull();
        t.dateTime('dt_updated').nullable();
      });
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
