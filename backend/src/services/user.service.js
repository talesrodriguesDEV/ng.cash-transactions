const { User } = require('../models');

const listUsers = async () => User.findAll();

module.exports = {
  listUsers,
};
