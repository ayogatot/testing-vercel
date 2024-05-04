import { Router } from "express";
import newsController from "../controllers/news.controller";

const newsRoutes = Router();

newsRoutes.route("/:news_id").get(newsController.getById).put(newsController.update);
newsRoutes.route("/").get(newsController.getAll).post(newsController.add);

export { newsRoutes };
