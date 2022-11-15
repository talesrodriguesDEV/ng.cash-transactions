const { User } = require('../models');

const listUsers = async () => User.findAll();

const addNewUser = async (username, password, accountId) => User.create({ username, password, accountId });

const getUser = async (query, filter) => User.findOne({
  where: { [query]: filter }
});

module.exports = {
  listUsers,
  addNewUser,
  getUser,
};
