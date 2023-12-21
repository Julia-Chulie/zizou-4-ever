import express from "express";
import { getMaterial, getMaterials, createMaterial, createMaterialType, getMaterialTypes, getMaterialType } from "../controllers/MaterialController.js"; 

const materialRouter = express.Router();

materialRouter.post("/",createMaterial);

materialRouter.get("/", getMaterials);
materialRouter.get("/:id", getMaterial);

export default materialRouter;