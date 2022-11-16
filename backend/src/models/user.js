'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.Account, { foreignKey: 'accountId', as: 'account' });
    }
  }

  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      accountId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
