let connection;

function getConnection() {
  return connection;
}

function setConnection(knex) {
  connection = knex;
}

module.exports = {
  getConnection,
  setConnection,
};
