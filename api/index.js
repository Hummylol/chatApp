import Express from "express";
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectToDB from "./DB/connectToDB.js";
import cookieParser from 'cookie-parser'

const app = Express();

app.use(cors());
app.use(cookieParser());
app.use(Express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

connectToDB().then(() => {
    app.listen(8000, () => {
        console.log("Server started at port 8000");
    });
});

