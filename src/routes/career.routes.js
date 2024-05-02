import { Router } from "express";
import careerController from "../controllers/career.controller";


const careerRoutes = Router();

careerRoutes.post("/", careerController.add);
careerRoutes.get("/", careerController.getAll);
careerRoutes.put("/:career_id", careerController.update);

export { careerRoutes };
