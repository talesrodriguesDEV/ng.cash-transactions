const jwt = require('jsonwebtoken');

const generateToken = (username) => jwt.sign({ username }, 'ovocomatum', { expiresIn: '24h' });

const validateToken = (token) => {
  try {
    const user = jwt.verify(token, 'ovocomatum');

    return user;
  } catch (error) {
    return false;
  }
};

module.exports = {
  generateToken,
  validateToken,
};
