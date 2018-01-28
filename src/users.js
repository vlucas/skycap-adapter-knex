const { getConnection } = require('./config');

const knex = getConnection();
const TABLE_USERS = 'users';

/**
 * Find an existsting user by email address
 *
 * @param email {String}
 *
 * @return {Promise}
 */
function findByEmail(email) {
  return knex(TABLE_USERS)
    .first()
    .where('email', email);
}

/**
 * Register a new user
 *
 * @param email {String}
 * @param hashedPassword {String}
 * @param profileData {Object}
 *
 * @return {Promise}
 */
function register(email, hashedPassword, profileData = {}) {
  return findByEmail(email)
    .then(user => {
      // Ensure user does not already exist
      if (user !== false) {
        return Promise.reject('User already exists!');
      }

      let NOW = new Date();
      let storedUser = {
        email,
        password: hashedPassword,
        profileData,
        dt_created: NOW,
        dt_updated: NOW
      };

      return knex(TABLE_USERS)
        .insert(storedUser);
    });
}

module.exports = {
  findByEmail,
  register,
};
