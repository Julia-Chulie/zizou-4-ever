import express from "express";
import {getUserById, getCurrentUser} from "../controllers/UserController.js";
import { verifyToken } from "../middlewares/AuthenticatorGuard.js";

const userRouter = express.Router();

userRouter.get("/user/:id", verifyToken, getUserById); 
userRouter.get("/:token", getCurrentUser);

export default userRouter;