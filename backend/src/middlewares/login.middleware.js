const { UserService } = require('../services');
const { jwtUtil } = require('../utils');

const validateLogin = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await UserService.getUser('username', username);

  if (!user || password !== user.password) return res.status(400).json({ message: 'Invalid login' });

  return next();
};

const isUserLogged = (req, res, next) => {
  const token = req.header('User-Token');
  const logged = jwtUtil.validateToken(token);

  if (!logged) return res.status(401).json({ message: 'User unauthorized' });

  req.username = logged.username; 

  return next();
};

module.exports = {
  validateLogin,
  isUserLogged,
};
