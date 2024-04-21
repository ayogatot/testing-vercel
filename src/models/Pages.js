import Sequelize, { Model } from "sequelize";

class Pages extends Model {
  static init(sequelize) {
    super.init(
      {
        page_id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        parent_page_id: {
          type: Sequelize.UUID,
          allowNull: true,
        },
        page: {
          type: Sequelize.STRING(64),
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
        modelName: "Pages",
        tableName: "pages",
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
    this.hasMany(models.Images, { foreignKey: "page_id" });
    this.belongsTo(models.User, { foreignKey: "user_id" });
    this.belongsTo(models.Pages, { foreignKey: "parent_page_id", targetKey: "page_id" });
  }
}

export default Pages;
