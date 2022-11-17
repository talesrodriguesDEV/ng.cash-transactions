'use strict';

/** @type {import('sequelize-cli').Migration} */

import { QueryInterface } from 'sequelize';

module.exports = {
  async up (queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('Transactions', [
      {
        debitedAccountId: 1,
        creditedAccountId: 2,
        value: 150.43,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        debitedAccountId: 2,
        creditedAccountId: 1,
        value: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('Transactions', {});
  }
};
