import express from "express";
import {
    createMeubilaire,
    getMeubilaires,
    getMeubilaire,
    getMeubilairesByCategory
} from "../controllers/MeubilaireController.js";

const meubilaireRouter = express.Router();

meubilaireRouter.post("/api/meubilaires/create", createMeubilaire);

meubilaireRouter.get("/api/meubilaires/:id", getMeubilaire);
meubilaireRouter.get("/api/meubilaires", getMeubilaires);
meubilaireRouter.post("/api/meubilaires/category/:id", getMeubilairesByCategory);

export default meubilaireRouter;