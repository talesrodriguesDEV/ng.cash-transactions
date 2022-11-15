'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Accounts');
  }
};
