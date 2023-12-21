import express  from "express";
import { createEnterprise, getEnterprises } from "../controllers/EnterpriseController.js";

const enterpriseRouter = express.Router();

enterpriseRouter.post("/", createEnterprise);
enterpriseRouter.get("/", getEnterprises);

export default enterpriseRouter