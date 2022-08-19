'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Adventures', [
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
        product_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Adventures', null, {});
  }
};
