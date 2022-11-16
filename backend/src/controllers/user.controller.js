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

const getUserBalance = async (req, res) => {
  const username = req.username;

  const user = await UserService.getUser('username', username);

  res.status(200).json(user);
}

module.exports = {
  listUsers,
  addNewUser,
  getUserBalance,
};
