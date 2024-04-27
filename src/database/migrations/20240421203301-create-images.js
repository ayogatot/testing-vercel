'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('images', {
      image_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      page_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'pages',
          key: 'page_id'
        }
      },
      filename: {
        type: Sequelize.STRING(36),
      },
      created_at: {
        type: Sequelize.BIGINT,
        defaultValue: new Date().getTime(),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.BIGINT,
        defaultValue: null,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('images');
  }
};