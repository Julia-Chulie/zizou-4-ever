import { Router } from "express";

import categoryRouter from "./categoryRouter.js";
import enterpriseRouter from "./enterpriseRouter.js";
import materialRouter from "./materialRouter.js";
import materialTypeRouter from "./materialTypeRouter.js";
import meubilaireRouter from "./meubilaireRouter.js";
import statisticsRouter from "./statisticsRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use("/api/categories", categoryRouter);
router.use("/api/enterprises", enterpriseRouter);
router.use("/api/materials", materialRouter);
router.use("/api/materialTypes", materialTypeRouter);
router.use("/api/meubilaires", meubilaireRouter);
router.use("/api/statistics", statisticsRouter)
router.use("/api/users", userRouter);

export default router;