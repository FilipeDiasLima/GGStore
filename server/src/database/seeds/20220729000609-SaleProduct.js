'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SaleProducts', [
      {
        user_id: 1,
        product_id: 1,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 2,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 3,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 4,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 5,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 6,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 7,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 8,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 9,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 10,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 11,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 12,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 13,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 14,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 15,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 16,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 17,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 18,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 19,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 20,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 21,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 22,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 23,
        key: 'm7Jay-jvg3K-5GUhO-K39Nr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SaleProducts', null, {});
  }
};
