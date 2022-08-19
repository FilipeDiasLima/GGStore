'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Indies', [
      {
        product_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Indies', null, {});
  }
};
