import UserService from '../services/user.service';
import { NextFunction, Request, Response } from 'express';

const validateUsername = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;

  if (username.length < 3) return res.status(400).json({ message: 'Username must be at least 3 characters long' });

  const user = await UserService.getUser('username', username);

  if (user) return res.status(400).json({ message: 'This username already exists' });

  return next();
};

const validatePassword = (req:Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  const noCapitalLetter = password.split('').every((character: string) => (character.charCodeAt(0) < 65 || character.charCodeAt(0) > 90));

  const noNumber = password.split('').every((character: string) => (character.charCodeAt(0) < 48 || character.charCodeAt(0) > 57));

  const noLength = password.length < 8;

  if (noCapitalLetter || noNumber || noLength) return res.status(400).json({ message: 'Invalid password' });

  return next();
};

export default {
  validateUsername,
  validatePassword,
};
