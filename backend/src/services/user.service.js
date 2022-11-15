const { User, Account } = require('../models');

const listUsers = async () => User.findAll();

const addNewUser = async (username, password, accountId) => User.create({ username, password, accountId });

const getUser = async (query, filter) => User.findOne({
  where: { [query]: filter },
  include: [
    {
      model: Account,
      as: 'account',
    },
  ],
});

module.exports = {
  listUsers,
  addNewUser,
  getUser,
};
