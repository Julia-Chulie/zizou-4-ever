import express from "express";
import {createMaterialType, getMaterialTypes, getMaterialType} from "../controllers/MaterialController.js"; 

const materialTypeRouter = express.Router();

materialTypeRouter.post("/", createMaterialType);
materialTypeRouter.get("/", getMaterialTypes);
materialTypeRouter.get("/:id", getMaterialType);

export default materialTypeRouter;