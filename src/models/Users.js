import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        role: {
          type: Sequelize.ENUM('SUPER_ADMIN', "ADMIN"),
          allowNull: false,
          defaultValue: "ADMIN",
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
        modelName: "Users",
        tableName: "users",
        createdAt: false,
        updatedAt: false,
        underscored: true,
        defaultScope: {
          order: [["created_at", "DESC"]],
        },
      }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    // this.belongsToMany(models.Address, {
    //   through: "UserAddress",
    //   foreignKey: "userId",
    // });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

export default Users;
