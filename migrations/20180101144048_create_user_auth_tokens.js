exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_access_tokens', function(t) {
    t.increments('id').primary();
    t.integer('user_id').index().references('id').inTable('users').onDelete('CASCADE');
    t.string('access_token').notNull().unique();
    t.string('scope');
    t.dateTime('dt_created').notNull();
    t.dateTime('dt_expires').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_access_tokens');
};
