import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';

class User extends Model {
  declare id: number;
  declare username: string;
  declare password: string;
  declare accountId: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  username: {
    type: STRING,
  },
  password: {
    type: STRING,
  },
  accountId: {
    type: INTEGER,
    references: {
      model: 'Accounts',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
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
  modelName: 'User',
});

export default User;

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


// 'use strict';

// const { Model } = require('sequelize');
// import { Sequelize } from 'sequelize';

// module.exports = (sequelize: Sequelize, DataTypes: { STRING: any; INTEGER: any; }) => {
//   class User extends Model {
//     static associate(models: typeof Model) {
//       this.belongsTo(models.Account, { foreignKey: 'accountId', as: 'account' });
//     }
//   }

//   User.init(
//     {
//       username: DataTypes.STRING,
//       password: DataTypes.STRING,
//       accountId: DataTypes.INTEGER
//     },
//     {
//       sequelize,
//       modelName: 'User',
//     }
//   );

//   return User;
// };
