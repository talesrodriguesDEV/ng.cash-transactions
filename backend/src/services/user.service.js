const { User } = require('../models');

const listUsers = async () => User.findAll();

const addNewUser = async (username, password, accountId) => User.create({ username, password, accountId });

module.exports = {
  listUsers,
  addNewUser,
};
