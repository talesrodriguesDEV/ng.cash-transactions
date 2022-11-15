const { UserService, AccountService } = require('../services');

const listUsers = async (_req, res) => {
  const users = await UserService.listUsers();
  res.status(200).json(users);
};

const addNewUser = async (req, res) => {
  const { username, password } = req.body;
  const { id } = await AccountService.addNewAccount();
  const newUser = await UserService.addNewUser(username, password, id);

  res.status(200).json(newUser);
}

module.exports = {
  listUsers,
  addNewUser,
};
