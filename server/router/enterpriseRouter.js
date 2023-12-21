import express  from "express";
import { createEnterprise, getEnterprises, getEnterpriseByMaterialType } from "../controllers/EnterpriseController.js";

const enterpriseRouter = express.Router();

enterpriseRouter.post("/", createEnterprise);

enterpriseRouter.get("/", getEnterprises);
enterpriseRouter.get("/:materialType", getEnterpriseByMaterialType);

export default enterpriseRouter