'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Maria',
        password: 'maria123',
        accountId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'João',
        password: 'joao321',
        accountId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users');
  }
};
