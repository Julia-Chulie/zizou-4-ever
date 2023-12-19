import express from "express";
import { createCategory, getCategories } from "../controllers/CategoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/api/categories", createCategory);
categoryRouter.get("/api/categories", getCategories);

export default categoryRouter;

