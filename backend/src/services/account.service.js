const { Account } = require('../models');

const addNewAccount = async () => Account.create({ balance: 100 });

module.exports = {
  addNewAccount,
};
