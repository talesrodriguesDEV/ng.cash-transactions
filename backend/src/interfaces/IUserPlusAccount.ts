import User from '../models/user';

export interface IUserPlusAccount extends User {
  account?: { id: number, balance: number },
}
