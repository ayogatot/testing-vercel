import { Router } from "express";
import applicantController from "../controllers/applicant.controller";


const applicantRoutes = Router();

applicantRoutes.post("/", applicantController.add);
applicantRoutes.get("/", applicantController.getAll);

export { applicantRoutes };
