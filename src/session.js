const { getConnection } = require('./config');
const knexStoreFactory = require('connect-session-knex');

/**
 * Session setup for Express.js (passed to app.use())
 *
 * @param session {Function}
 * @param config {Object} config to be passed to session
 */
function setup(session, config = {}) {
  const KnexSessionStore = knexStoreFactory(session);
  const store = new KnexSessionStore({
    knex: getConnection(),
    tablename: config.tablename || 'sessions' // optional. Defaults to 'sessions'
  });

  delete config.knex;
  delete config.tablename;

  let cookieExpireTime = 30 * 24 * 60 * 60 * 1000; // 30 days
  let defaultConfig = {
    cookie: { httpOnly: true, maxAge: cookieExpireTime, sameSite: 'lax' },
    resave: false,
    saveUninitialized: false,
    secret: config.secret || 'testing-abc123',
    store,
  };

  return session(Object.assign(defaultConfig, config));
}

module.exports = {
  setup,
};
