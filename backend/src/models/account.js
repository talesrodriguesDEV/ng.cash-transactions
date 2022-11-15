'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.User, { foreignKey: 'accountId', as: 'account' });
      this.hasMany(models.Transaction, { foreignKey: 'transactionId', as: 'transaction' });
    }
  }
  Account.init({
    balance: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};