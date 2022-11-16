'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      this.hasOne(models.User, { foreignKey: 'accountId', as: 'user' });
      this.hasMany(models.Transaction, { foreignKey: 'debitedAccountId', as: 'debitTransactions' });
      this.hasMany(models.Transaction, { foreignKey: 'creditedAccountId', as: 'creditTransactions' });
    }
  }

  Account.init(
    {
      balance: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Account',
    }
  );

  return Account;
};
