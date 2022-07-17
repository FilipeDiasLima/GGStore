'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        user_id: 1,
        name: "assassin's creed valhalla",
        price: 49.99,
        image_poster: "6c2607ee9cfd8e17b441-thumb-1920-1077274.jpg",
        image_cover: "8b36fa717371977ea0b3-8XGEPtD1xoasK0FYkYNcCn1z.webp",
        plataform: "pc",
        studio: "ubisoft",
        release: "10/11/2021",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
