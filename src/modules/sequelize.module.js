import { Sequelize } from "sequelize";
import { logger } from "express-glass";
import databaseConfig from "../config/database";
import fs from "fs";

const modelFiles = fs
  .readdirSync(__dirname + "/../models/")
  .filter((file) => file.endsWith(".js"));

const sequelizeService = {
  init: async () => {
    try {
      let connection = new Sequelize(databaseConfig);
     
      for (const file of modelFiles) {
        const model = await import(`../models/${file}`);
        model.default.init(connection);
      }

      modelFiles.map(async (file) => {
        const model = await import(`../models/${file}`);
        model.default.associate && model.default.associate(connection.models);
      });

      logger().info("[SEQUELIZE] Database service initialized");
    } catch (error) {
      logger().error("[SEQUELIZE] Error during database service initialization");
      throw error;
    }
  },
};

export default sequelizeService;
