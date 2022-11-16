const passwordHash = require('password-hash');

const generateHashedPassword = (password) => passwordHash.generate(password);

const verifyHashedPassword = (password, hashedPassword) => passwordHash.verify(password, hashedPassword);

module.exports = {
  generateHashedPassword,
  verifyHashedPassword,
};
