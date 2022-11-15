const { UserService } = require('../services');

const listUsers = async (req, res) => {
  const users = await UserService.listUsers();
    res.status(200).json(users);
};

module.exports = {
  listUsers,
};
