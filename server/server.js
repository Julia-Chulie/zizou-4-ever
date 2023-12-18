import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
// import securityRouter from "./router/securityRouter.js";
import materialRouter from "./router/materialRouter.js";

dotenv.config();
const PORT = process.env.PORT || 8001;

const app = express();
app.use(cors());
app.use(express.json());
//  app.use(securityRouter);
 app.use(materialRouter)
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