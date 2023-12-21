import express from "express";
import {
    getMeubilairesNumberByCategory,
    getMeubilairesNumberByMaterial
} from "../controllers/StatisticsController.js";
import {verifyToken} from "../middlewares/AuthenticatorGuard.js";

const statisticsRouter = express.Router();

statisticsRouter.get("/meubilaires_by_material",getMeubilairesNumberByMaterial);
statisticsRouter.get("/meubilaires_by_category",getMeubilairesNumberByCategory);

export default statisticsRouter;