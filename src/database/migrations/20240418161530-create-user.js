"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING(256),
      },
      email: {
        type: Sequelize.STRING(128),
      },
      password: {
        type: Sequelize.STRING(256),
      },
      role: {
        type: Sequelize.ENUM("SUPER_ADMIN", "ADMIN"),
        allowNull: false,
        defaultValue: "ADMIN",
      },
      created_at: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
