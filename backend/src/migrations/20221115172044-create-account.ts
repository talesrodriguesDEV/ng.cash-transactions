'use strict';

/** @type {import('sequelize-cli').Migration} */

import { QueryInterface, INTEGER, FLOAT, DATE } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('Accounts', {
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
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('Accounts');
  }
};
