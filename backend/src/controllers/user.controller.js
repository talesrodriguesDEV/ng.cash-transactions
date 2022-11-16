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

const userTransaction = async (req, res) => {
  const username = req.username;
  const { destinyAccountId, value } = req.body;

  const { account: { id, balance } } = await UserService.getUser('username', username);

  if (destinyAccountId === id) return res.status(401).json({ message: 'User can\'t pay himself/herself' });

  if (balance < value) return res.status(401).json({message: 'Insufficient balance'});

  const transaction = await UserService.userTransaction(id, value, destinyAccountId);

  res.status(200).json(transaction);
}

const listUserTransactions = async (req, res) => {
  const username = req.username;

  const { account: { id } } = await UserService.getUser('username', username);

  const transactions = await UserService.listUserTransactions(id);

  res.status(200).json(transactions);
}

module.exports = {
  listUsers,
  addNewUser,
  getUserBalance,
  userTransaction,
  listUserTransactions,
};
