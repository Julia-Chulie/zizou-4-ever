import express from "express";
import { createCategory, getCategories } from "../controllers/CategoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/", getCategories);

export default categoryRouter;

