import { Model, INTEGER, FLOAT, DATE } from 'sequelize';
import User from './user';
import Transaction from './transaction';
import db from '.';

class Account extends Model {
  declare id: number;
  declare balance: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Account.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  balance: {
    allowNull: false,
    type: FLOAT,
  },
  createdAt: {
    allowNull: false,
    type: DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DATE,
  }
}, {
  sequelize: db,
  modelName: 'Account',
});

Account.hasOne(User, { foreignKey: 'accountId', as: 'user' });
User.belongsTo(Account, { foreignKey: 'accountId', as: 'account' });

Account.hasMany(Transaction, { foreignKey: 'debitedAccountId', as: 'debitTransactions' });
Transaction.belongsTo(Account, { foreignKey: 'debitedAccountId', as: 'giverAccount' });

Account.hasMany(Transaction, { foreignKey: 'creditedAccountId', as: 'creditTransactions' });
Transaction.belongsTo(Account, { foreignKey: 'creditedAccountId', as: 'receiverAccount' });

export default Account;

// 'use strict';

// const { Model } = require('sequelize');
// import { Sequelize } from 'sequelize';

// module.exports = (sequelize: Sequelize, DataTypes: { FLOAT: any; }) => {
//   class Account extends Model {
//     static associate(models: typeof Model) {
//       this.hasOne(models.User, { foreignKey: 'accountId', as: 'user' });
//       this.hasMany(models.Transaction, { foreignKey: 'debitedAccountId', as: 'debitTransactions' });
//       this.hasMany(models.Transaction, { foreignKey: 'creditedAccountId', as: 'creditTransactions' });
//     }
//   }

//   Account.init(
//     {
//       balance: DataTypes.FLOAT,
//     },
//     {
//       sequelize,
//       modelName: 'Account',
//     }
//   );

//   return Account;
// };
