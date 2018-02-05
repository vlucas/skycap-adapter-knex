# Skycap Knex.js Auth Adapter

Knex.js database adapter for [skycap](https://www.npmjs.com/package/skycap).
Supports all the database types that Knex.js does (PostgreSQL, MySQL, MSSQL,
 Oracle, SQLite, etc.)

## NO OFFICIAL RELEASE YET

Skycap is in the infant stages of just an idea of something that might be cool.
Don't use this in your project yet! :)

## Running Skycap Migrations

This adapter can create the required database tables for users, authentication,
and profiles, etc. All you need to do is run all of this module's provided
migrations from your project migrations directory.

Create the new migration file:

```
knex migrate:make skycap_setup
```

Copy and paste in the following contents:
```
// Run all migrations in the 'skycap-adapter-knex' module directory
const normalizedPath = require("path").join(__dirname, "../node_modules/skycap-adapter-knex/migrations");
let migrates = [];

// Require all migrations in Skycap
require("fs").readdirSync(normalizedPath).forEach(function(file) {
  let filePath = normalizedPath + "/" + file;

  migrates.push(require(filePath));
});

exports.up = function(knex, Promise) {
  // Up in ORDER
  return Promise.all(migrates.map(m => m.up(knex, Promise)));
};

exports.down = function(knex, Promise) {
  // Down in REVERSE ORDER
  return Promise.all(migrates.reverse().map(m => m.down(knex, Promise)));
};
```
