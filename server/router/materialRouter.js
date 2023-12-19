import express from "express";
import { getMaterial, getMaterials, createMaterial, createMaterialType, getMaterialTypes, getMaterialType } from "../controllers/MaterialController.js"; 

const materialRouter = express.Router();

materialRouter.post("/api/materials/create",createMaterial);

materialRouter.get("/api/materials/:id", getMaterial);
materialRouter.get("/api/materials", getMaterials);

materialRouter.post("/api/materialTypes", createMaterialType);

materialRouter.get("/api/materialTypes/:id", getMaterialType);
materialRouter.get("/api/materialTypes", getMaterialTypes);

export default materialRouter;