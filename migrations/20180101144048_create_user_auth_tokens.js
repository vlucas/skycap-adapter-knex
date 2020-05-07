exports.up = function(knex) {
  return knex.schema.createTable('user_access_tokens', function(t) {
    t.uuid('id').primary().notNull().defaultTo(knex.raw('uuid_generate_v4()'));
    t.uuid('user_id').index().references('id').inTable('users').onDelete('CASCADE');
    t.string('access_token').notNull().unique();
    t.string('scope');
    t.dateTime('dt_created').notNull();
    t.dateTime('dt_expires').notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_access_tokens');
};
