const { getConnection } = require('./config');

const TABLE_USERS = 'users';

/**
 * Find an existsting user by email address
 *
 * @param email {String}
 *
 * @return {Promise}
 */
function findByEmail(email) {
  return getConnection()(TABLE_USERS)
    .first()
    .where('email', email);
}

/**
 * Register a new user
 *
 * @param name {String}
 * @param email {String}
 * @param hashedPassword {String}
 * @param username {String} - Optional username
 * @param profileData {Object}
 *
 * @return {Promise}
 */
function register(name, email, hashedPassword, username = null, profileData = {}) {
  return findByEmail(email)
    .then(user => {
      // Ensure user does not already exist
      if (user) {
        return Promise.reject('User already exists!');
      }

      let NOW = new Date();

      if (Object.keys(profileData).length === 0) {
        profileData = null;
      }

      let storedUser = {
        name,
        username,
        email,
        password: hashedPassword,
        profileData,
        dt_created: NOW,
        dt_updated: NOW
      };

      return getConnection()(TABLE_USERS)
        .insert(storedUser)
        .then(() => {
          return findByEmail(email);
        });
    });
}

module.exports = {
  findByEmail,
  register,
};
