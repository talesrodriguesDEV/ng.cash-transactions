const jwt = require('jsonwebtoken');

const generateToken = (username) => jwt.sign({ username }, 'ovocomatum', { expiresIn: '24h' });

module.exports = {
  generateToken,
};
