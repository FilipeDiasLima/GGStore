'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Racings', [
      {
        product_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Racings', null, {});
  }
};
