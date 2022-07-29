'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        provider: true,
        email: 'admin@admin.com',
        password_hash: '$2a$08$Bcagt4CT/0ckz6tx7gx9TO.jUJ5kNKqIBPUkIxkUJSaOo0LIugV1K',
        avatar: 'admin.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
