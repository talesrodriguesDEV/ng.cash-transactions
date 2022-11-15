const { jwtUtil } = require('../utils');

const doLogin = async (req, res) => {
  const { username } = req.body;

  const token = jwtUtil.generateToken(username);

  res.status(200).json({ token });
};

module.exports = {
  doLogin,
};
