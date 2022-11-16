const { User, Account, Transaction } = require('../models');

const listUsers = async () => User.findAll({
  include: [
    {
      model: Account,
      as: 'account',
    },
  ],
});

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

const userTransaction = async (debitedAccountId, value, creditedAccountId) => {
  Account.decrement({ balance: value }, { where: { id: debitedAccountId } });

  Account.increment({ balance: value }, { where: { id: creditedAccountId } });

  return Transaction.create({ debitedAccountId, creditedAccountId, value });
}

const listUserTransactions = async (accountId) => {
  const debitTransactions = await Transaction.findAll({ where: { debitedAccountId: accountId } });
  const creditTransactions = await Transaction.findAll({ where: { creditedAccountId: accountId } });

  return { debitTransactions, creditTransactions };
}

module.exports = {
  listUsers,
  addNewUser,
  getUser,
  userTransaction,
  listUserTransactions,
};
