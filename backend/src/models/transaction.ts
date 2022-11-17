import { Model, INTEGER, FLOAT, DATE } from 'sequelize';
import db from '.';

class Transaction extends Model {
  declare id: number;
  declare debitedAccountId: number;
  declare creditedAccountId: number;
  declare value: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Transaction.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER
  },
  debitedAccountId: {
    type: INTEGER,
    references: {
      model: 'Accounts',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  creditedAccountId: {
    type: INTEGER,
    references: {
      model: 'Accounts',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  value: {
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
  modelName: 'Transaction',
});

export default Transaction;

// 'use strict';

// const { Model } = require('sequelize');
// import { Sequelize } from 'sequelize';

// module.exports = (sequelize: Sequelize, DataTypes: { INTEGER: any; FLOAT: any; }) => {
//   class Transaction extends Model {
//     static associate(models: typeof Model) {
//       this.belongsTo(models.Account, { foreignKey: 'debitedAccountId', as: 'giverAccount' });
//       this.belongsTo(models.Account, { foreignKey: 'creditedAccountId', as: 'receiverAccount' });
//     }
//   }

//   Transaction.init(
//     {
//       debitedAccountId: DataTypes.INTEGER,
//       creditedAccountId: DataTypes.INTEGER,
//       value: DataTypes.FLOAT,
//     },
//     {
//       sequelize,
//       modelName: 'Transaction',
//     }
//   );

//   return Transaction;
// };
