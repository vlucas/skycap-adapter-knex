const session = require('./src/session');
const { getConnection, setConnection } = require('./src/config');
const users = require('./src/users');

module.exports = {
  getConnection,
  setConnection,
  session,
  users,
};
