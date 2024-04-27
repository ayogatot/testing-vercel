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
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING(128),
          allowNull: false,
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
          allowNull: false,
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
          order: [["sequence", "ASC"]],
        },
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Images, { foreignKey: "page_id", as: "images" });
    this.belongsTo(models.Pages, { foreignKey: "parent_page_id", as: "parent", constraints: false });
    this.hasMany(models.Pages, { foreignKey: "parent_page_id", targetKey: "page_id", as: "childs" });
  }
}

export default Pages;
