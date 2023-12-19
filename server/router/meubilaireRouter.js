import express from "express";
import {
    createMeubilaire,
    getMeubilaires,
    getMeubilaire,
    getMeubilairesBySearch
} from "../controllers/MeubilaireController.js";

const meubilaireRouter = express.Router();

meubilaireRouter.post("/api/meubilaires", createMeubilaire);

meubilaireRouter.get("/api/meubilaires/:id", getMeubilaire);

meubilaireRouter.get("/api/meubilaires", getMeubilairesBySearch);

export default meubilaireRouter;