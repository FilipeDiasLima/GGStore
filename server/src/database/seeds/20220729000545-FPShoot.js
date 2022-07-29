'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('FPShoots', [
      {
        product_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('FPShoots', null, {});
  }
};
