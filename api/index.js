import Express from "express";
import cors from 'cors'


const app = Express();
app.use(cors());

app.get("/api/hello/",(req,res)=>{
    res.json({
        message:"Hello people"
    });
})

app.listen(8000,()=>{
    console.log("Server started at port 8000dsadas");
})

