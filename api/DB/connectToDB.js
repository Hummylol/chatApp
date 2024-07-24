import mongoose from "mongoose";

const connectToDB = async (req,res)=>{
try {
    await mongoose.connect("mongodb+srv://humaidsadath2044:humaidsadath2044@chatapp.xg2wubg.mongodb.net/?retryWrites=true&w=majority&appName=chatApp");
    console.log("Connected to DB successfully");
} catch (error) {
    console.log("error connecting to DB");
}
}

export default connectToDB;