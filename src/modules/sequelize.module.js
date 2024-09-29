import { Sequelize } from "sequelize";
import databaseConfig from "../config/database.cjs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const modelFiles = fs
  .readdirSync(__dirname + "/../models/")
  .filter((file) => file.endsWith(".js"));

export const connection = new Sequelize(databaseConfig);

const sequelizeService = {
  init: async () => {
    try {
      for (const file of modelFiles) {
        const model = await import(`../models/${file}`);
        model.default.init(connection);
      }

      modelFiles.map(async (file) => {
        const model = await import(`../models/${file}`);
        model.default.associate && model.default.associate(connection.models);
      });

      console.log("[SEQUELIZE] Database service initialized");
    } catch (error) {
      console.error(
        "[SEQUELIZE] Error during database service initialization"
      );
      throw error;
    }
  },
};

export default sequelizeService;
