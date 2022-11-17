'use strict';

/** @type {import('sequelize-cli').Migration} */

import { QueryInterface } from 'sequelize';

module.exports = {
  async up (queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Maria',
        password: 'Maria123',
        accountId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'João',
        password: 'Joao3210',
        accountId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('Users', {});
  }
};
