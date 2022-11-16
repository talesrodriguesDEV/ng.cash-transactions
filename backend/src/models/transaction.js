'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      this.belongsTo(models.Account, { foreignKey: 'debitedAccountId', as: 'giverAccount' });
      this.belongsTo(models.Account, { foreignKey: 'creditedAccountId', as: 'receiverAccount' });
    }
  }

  Transaction.init(
    {
      debitedAccountId: DataTypes.INTEGER,
      creditedAccountId: DataTypes.INTEGER,
      value: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Transaction',
    }
  );

  return Transaction;
};
