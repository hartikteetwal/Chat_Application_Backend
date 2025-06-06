import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGOOES_URL)
        console.log(`MongoDB connected`)
    } catch (error) {
        console.log("MongoDB connecting error:",error)
    }
}