const jwt = require('jsonwebtoken');

require('dotenv').config();

const generateToken = (username) => jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '24h' });

const validateToken = (token) => {
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);

    return user;
  } catch (error) {
    return false;
  }
};

module.exports = {
  generateToken,
  validateToken,
};
