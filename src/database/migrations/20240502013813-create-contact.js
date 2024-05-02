"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contacts", {
      contact_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      email: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false,
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
    await queryInterface.dropTable("contacts");
  },
};
