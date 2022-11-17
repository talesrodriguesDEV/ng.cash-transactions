import UserService from '../services/user.service';
import AccountService from '../services/account.service';
import hashUtil from '../utils/hash.util';

import { Request, Response } from 'express';
import { IRequest } from '../interfaces/IRequest';
import { IUserPlusAccount } from '../interfaces/IUserPlusAccount';


const listUsers = async (_req: Request, res: Response) => {
  const users = await UserService.listUsers();

  res.status(200).json(users);
};

const addNewUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const hashedPassword = hashUtil.generateHashedPassword(password);

  const { id } = await AccountService.addNewAccount();
  const newUser = await UserService.addNewUser(username, hashedPassword, id);

  res.status(200).json(newUser);
}

const getUserBalance = async (req: IRequest, res: Response) => {
  const username = req.username ? req.username : '';

  const user = await UserService.getUser('username', username);

  res.status(200).json(user);
}

const userTransaction = async (req: IRequest, res: Response) => {
  const username = req.username ? req.username : '';
  const { destinyAccountId, value } = req.body;

  const user: IUserPlusAccount | null = await UserService.getUser('username', username);
  let id = - 1;
  let balance = - 1;
  if (user?.account) {
    id = user.account.id;
    balance = user.account.balance;
  }

  if (destinyAccountId === id) return res.status(401).json({ message: 'User can\'t pay himself/herself' });

  if (balance < value) return res.status(401).json({ message: 'Insufficient balance' });

  const transaction = await UserService.userTransaction(id, value, destinyAccountId);

  res.status(200).json(transaction);
}

const listUserTransactions = async (req: IRequest, res: Response) => {
  const username = req.username ? req.username : '';

  const user: IUserPlusAccount | null = await UserService.getUser('username', username);
  let id = - 1;
  let balance = - 1;
  if (user?.account) {
    id = user.account.id;
    balance = user.account.balance;
  }

  const transactions = await UserService.listUserTransactions(id);

  res.status(200).json(transactions);
}

export default {
  listUsers,
  addNewUser,
  getUserBalance,
  userTransaction,
  listUserTransactions,
};
