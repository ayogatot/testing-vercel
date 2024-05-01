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
        filename: {
          type: Sequelize.STRING(40),
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
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pages, { foreignKey: "page_id", as: "page_detail" });
  }
}

export default Images;
