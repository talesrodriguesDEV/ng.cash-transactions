import UserService from '../services/user.service';
import jwtUtil from '../utils/jwt.util';
import hashUtil from '../utils/hash.util';

import { NextFunction, Request, Response } from 'express';
import { IRequest } from '../interfaces/IRequest';

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const user = await UserService.getUser('username', username);
  const validPassword = user && hashUtil.verifyHashedPassword(password, user.password);

  if (!user || !validPassword) return res.status(400).json({ message: 'Invalid login' });

  return next();
};

const isUserLogged = (req: IRequest, res: Response, next: NextFunction) => {
  const token = req.header('User-Token');
  const username = token ? jwtUtil.validateToken(token) : '';

  if (username === '') return res.status(401).json({ message: 'User unauthorized' });

  req.username = username;

  return next();
};

export default {
  validateLogin,
  isUserLogged,
};
