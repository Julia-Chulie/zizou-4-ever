import express from "express";
import {
    createMeubilaire,
    getMeubilaires,
    getMeubilaire,
    getMeubilairesBySearch
} from "../controllers/MeubilaireController.js";
import multer from "multer";

const meubilaireRouter = express.Router();
const uploads = multer({ dest: 'uploads' });

meubilaireRouter.post("/api/meubilaires", uploads.array("files") ,createMeubilaire);

meubilaireRouter.get("/api/meubilaires/:id", getMeubilaire);

meubilaireRouter.get("/api/meubilaires", getMeubilairesBySearch);

export default meubilaireRouter;