require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: process.env.POSTGRES_PASSWORD,
    database: 'ngcash',
    host: 'db',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: process.env.POSTGRES_PASSWORD,
    database: 'ngcash',
    host: 'db',
    dialect: 'postgres',
  },
  production: {
    username: 'postgres',
    password: process.env.POSTGRES_PASSWORD,
    database: 'ngcash',
    host: 'db',
    dialect: 'postgres',
  }
};
