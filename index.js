import  express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/userRoute.js";

const app = express();
mongoose.connect('mongodb://localhost:27017/fullstack_db');

const db=mongoose.connection;
db.on('error',(e)=>console.log(e))
db.once('open',()=>console.log('Database Terhubung'))


app.use(cors());
app.use(express.json());
app.use(userRouter);

app.listen(5000,()=>console.log("Server up and running"))