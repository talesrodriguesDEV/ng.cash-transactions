import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  database: 'ngcash',
  host: 'db',
  dialect: 'postgres',
};

export = config;
