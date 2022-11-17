'use strict';

/** @type {import('sequelize-cli').Migration} */

import { QueryInterface } from 'sequelize';

module.exports = {
  async up (queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('Accounts', [
      {
        balance: 1250.60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        balance: 280.50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('Accounts', {});
  }
};
