import express  from "express";
import { createEnterprise, getEnterprises } from "../controllers/EnterpriseController.js";

const enterpriseRouter = express.Router();

enterpriseRouter.post("/api/enterprises", createEnterprise);
enterpriseRouter.get("/api/enterprises", getEnterprises);

export default enterpriseRouter