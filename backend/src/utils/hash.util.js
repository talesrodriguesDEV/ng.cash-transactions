const passwordHash = require('password-hash');

const generateHashedPassword = (password) => passwordHash.generate(password);

module.exports = {
  generateHashedPassword,
};
