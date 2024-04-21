import dotenv from "dotenv";
import { logger } from "express-glass";
import modules from "./modules";

dotenv.config();

(async () => {
  try {
    for (const module of modules) {
      await module.init();
    }

    logger().info("🚀 Server initialized successfully");
  } catch (error) {
    logger().error(error);
    process.exit(1);
  }
})();
