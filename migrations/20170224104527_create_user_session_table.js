'use strict';

const fs = require('fs');
const sessionSQL = fs.readFileSync('./node_modules/connect-pg-simple/table.sql').toString();

exports.up = function(knex, Promise) {
  return knex.schema.raw(sessionSQL);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('session');
};
