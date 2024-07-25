import Express from "express";
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser'
import mongoose from "mongoose";

const connectToDB = async (req,res)=>{
try {
    await mongoose.connect("mongodb+srv://humaidsadath2044:humaidsadath2044@chatapp.xg2wubg.mongodb.net/?retryWrites=true&w=majority&appName=chatApp");
    console.log("Connected to DB successfully");
} catch (error) {
    console.log("error connecting to DB");
}
}
const app = Express();

app.use(cors());
app.use(cookieParser());
app.use(Express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(8000, () => {
        console.log("Server started at port 8000");
        connectToDB();
    });

