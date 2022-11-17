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
