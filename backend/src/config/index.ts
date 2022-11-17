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

//npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all
