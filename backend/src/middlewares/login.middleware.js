const { UserService } = require('../services');

const validateLogin = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await UserService.getUser('username', username);

  if (!user || password !== user.password) return res.status(400).json({ message: 'Invalid login' });

  return next();
};

const isUserLogged = (req, res, next) => {

};

module.exports = {
  validateLogin,
  isUserLogged,
};
