import User from '../models/user';
import Account from '../models/account';
import Transaction from '../models/transaction';

const listUsers = async () => User.findAll({
  include: [
    {
      model: Account,
      as: 'account',
    },
  ],
});

const addNewUser = async (username: string, password: string, accountId: number) => User.create({ username, password, accountId });

const getUser = async (query: string, filter: string) => User.findOne({
  where: { [query]: filter },
  include: [
    {
      model: Account,
      as: 'account',
    },
  ],
});

const userTransaction = async (debitedAccountId: number, value: number, creditedAccountId: number) => {
  Account.decrement({ balance: value }, { where: { id: debitedAccountId } });

  Account.increment({ balance: value }, { where: { id: creditedAccountId } });

  return Transaction.create({ debitedAccountId, creditedAccountId, value });
}

const listUserTransactions = async (accountId: number) => {
  const debitTransactions = await Transaction.findAll({ where: { debitedAccountId: accountId } });
  const creditTransactions = await Transaction.findAll({ where: { creditedAccountId: accountId } });

  return { debitTransactions, creditTransactions };
}

export default {
  listUsers,
  addNewUser,
  getUser,
  userTransaction,
  listUserTransactions,
};
