import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import materialRouter from "./router/materialRouter.js";
import meubilaireRouter from "./router/meubilaireRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import enterpriseRouter from "./router/enterpriseRouter.js";
import statisticsRouter from "./router/statisticsRouter.js";
import securityRouter from "./router/securityRouter.js";
import userRouter from "./router/userRouter.js";

dotenv.config();
const PORT = process.env.PORT || 8001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(securityRouter);
app.use(materialRouter)
app.use(meubilaireRouter)
app.use(categoryRouter)
app.use(enterpriseRouter)
app.use(express.static('public'));
app.use(statisticsRouter)
app.use(userRouter)

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then(init).catch((err) => {
    console.log('erssr',err);
 })

 async function init(){

    app.listen(PORT, () => {
       console.log(`Serveur lancé sur le ${PORT} général`);
    })
}