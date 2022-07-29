'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('RPGs', [
      {
        product_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('RPGs', null, {});
  }
};

