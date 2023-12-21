import express from "express";
import {
    createMeubilaire,
    getMeubilaires,
    getMeubilaire,
    getMeubilairesBySearch
} from "../controllers/MeubilaireController.js";
import multer from "multer";
import path, { dirname } from 'path';
import { fileURLToPath } from "url";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

const uploadPath = 'public/uploads'
function generateUniqueFilename(originalname) {
  const uniqueId = generateUniqueId();
  const extension = path.extname(originalname);

  return `${uniqueId}${extension}`;
}

function generateUniqueId() {
  const timestamp = Date.now();
  return `${timestamp}`;
}

const upload = multer({
  dest: uploadPath,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(uploadPath);
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const uniqueFilename = generateUniqueFilename(file.originalname);
      cb(null, uniqueFilename);
    }
  }),
  fileFilter: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    cb(null, extension && extension !== '.');
  }
});

const meubilaireRouter = express.Router();
const uploads = multer({ dest: 'public/uploads' });

meubilaireRouter.post("/api/meubilaires", upload.single("files"), createMeubilaire);

meubilaireRouter.get("/api/meubilaires/:id", getMeubilaire);

meubilaireRouter.get("/api/meubilaires", getMeubilairesBySearch);

export default meubilaireRouter;