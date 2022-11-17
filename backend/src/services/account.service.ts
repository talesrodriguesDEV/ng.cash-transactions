import Account from '../models/account';

const addNewAccount = async () => Account.create({ balance: 100 });

export default {
  addNewAccount,
};
