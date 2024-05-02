import { Router } from "express";
import contactController from "../controllers/contact.controller";


const contactRoutes = Router();

contactRoutes.post("/", contactController.add);
contactRoutes.get("/", contactController.getAll);

export { contactRoutes };
