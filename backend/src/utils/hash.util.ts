import passwordHash from 'password-hash';

const generateHashedPassword = (password: string) => passwordHash.generate(password);

const verifyHashedPassword = (password: string, hashedPassword: string) => passwordHash.verify(password, hashedPassword);

export default {
  generateHashedPassword,
  verifyHashedPassword,
};
