'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Actions', [
      {
        product_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
        product_id: 6,
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
      {
        product_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Actions', null, {});
  }
};
