import Sequelize, { Model } from "sequelize";

class Contacts extends Model {
  static init(sequelize) {
    super.init(
      {
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
      },
      {
        sequelize,
        modelName: "Contacts",
        tableName: "contacts",
        createdAt: false,
        updatedAt: false,
        underscored: true,
        defaultScope: {
          order: [["created_at", "DESC"]],
        },
      }
    );

    return this;
  }

  static associate(models) {}
}

export default Contacts;
