import { Router } from "express";
import absenceController from "../controllers/absence.controller";


const absenceRoutes = Router();

absenceRoutes.post("/", absenceController.add);
absenceRoutes.get("/", absenceController.getAll);
absenceRoutes.put("/:absence_id", absenceController.update);

export { absenceRoutes };
