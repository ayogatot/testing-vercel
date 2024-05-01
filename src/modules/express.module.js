import { logger } from "express-glass";
import express from "express";
import globalErrorHandler from "../middlewares/errorHandler.middleware";
import routes from "../routes";
import compression from "compression";
import path from 'path'

let server;

const expressService = {
  init: async () => {
    try {
      server = express();
      server.use(compression())
      server.use(express.json());
      server.use(express.urlencoded({ extended: true }));
      server.use('/uploads', express.static(path.join(__dirname, '../uploads')));

      // Routes
      server.use('/api/v1/auth', routes.authRoutes);
      server.use('/api/v1/pages', routes.pageRoutes);
      server.use('/api/v1/images', routes.imageRoutes);

      server.use(globalErrorHandler);

      server.listen(process.env.SERVER_PORT);
      logger().info("[EXPRESS] Express initialized");
    } catch (error) {
      logger().error("[EXPRESS] Error during express service initialization");
      throw error;
    }
  },
};

export default expressService;
