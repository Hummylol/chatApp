import Express from "express";
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import connectToDB from "./DB/connectToDB.js";

const app = Express();

app.use(cors());
app.use(Express.json());

app.use("/api/auth", authRoutes);

connectToDB().then(() => {
    app.listen(8000, () => {
        console.log("Server started at port 8000");
    });
});

