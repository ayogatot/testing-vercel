import { Router } from "express";
import imageController from "../controllers/image.controller";


const imageRoutes = Router();

imageRoutes.put("/:image_id", imageController.update);
imageRoutes.get("/", imageController.getAll);

export { imageRoutes };
