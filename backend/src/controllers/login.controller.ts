import { Request, Response } from 'express';
import jwtUtil from '../utils/jwt.util';

const doLogin = async (req: Request, res: Response) => {
  const { username } = req.body;

  const token = jwtUtil.generateToken(username);

  res.status(200).json({ token });
};

export default {
  doLogin,
};
