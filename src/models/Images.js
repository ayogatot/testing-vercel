import Sequelize, { Model } from "sequelize";

class Images extends Model {
  static init(sequelize) {
    super.init(
      {
        image_id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        page_id: {
          type: Sequelize.UUID,
          allowNull: true,
        },
        url: {
          type: Sequelize.STRING(128),
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
        modelName: "Images",
        tableName: "images",
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

  static associate(models) {
    this.belongsTo(models.Pages, { foreignKey: "page_id" });
  }
}

export default Images;
