"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pages", {
      page_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      parent_page_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "pages",
          key: "page_id",
        }
      },
      page: {
        type: Sequelize.STRING,
      },
      section: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      title: {
        type: Sequelize.STRING(128),
      },
      subtitle: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      sequence: {
        type: Sequelize.INTEGER,
      },
      last_updated_by: {
        type: Sequelize.UUID,
        references: {
          model: "users",
          key: "user_id",
        }
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
    await queryInterface.dropTable("pages");
  },
};
