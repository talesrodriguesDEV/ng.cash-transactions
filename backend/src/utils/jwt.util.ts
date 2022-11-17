import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface IUserInfo extends JwtPayload {
  username?: string,
}

const generateToken = (username: string) => jwt.sign({ username }, process.env.JWT_SECRET as string, { expiresIn: '24h' });

const validateToken = (token: string) => {
  try {
    const user: IUserInfo | string = jwt.verify(token, process.env.JWT_SECRET as string);

    if (typeof user !== 'string') return user.username;
  } catch (error) {
    return '';
  }
};

export default {
  generateToken,
  validateToken,
};
