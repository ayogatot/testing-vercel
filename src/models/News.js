import Sequelize, { Model } from "sequelize";

class News extends Model {
  static init(sequelize) {
    super.init(
      {
        news_id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        title: {
          type: Sequelize.STRING(256),
          allowNull: false,
        },
        subtitle: {
          type: Sequelize.STRING(256),
          allowNull: false,
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING(40),
          allowNull: false
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
        modelName: "News",
        tableName: "news",
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

export default News;
