'use strict';

/** @type {import('sequelize-cli').Migration} */

import { QueryInterface, INTEGER, STRING, DATE } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('Users', {
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
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('Users');
  }
};
