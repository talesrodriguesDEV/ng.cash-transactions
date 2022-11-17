import { JwtPayload } from 'jsonwebtoken';

export interface IUserInfo extends JwtPayload {
  username?: string,
}
