import { Router } from "express";
import pageController from "../controllers/page.controller";


const pageRoutes = Router();

pageRoutes.post("/", pageController.add);
pageRoutes.get("/", pageController.getAll);

export { pageRoutes };
