import express from "express";
import authRoute from "./routes/auth.route.js";
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";

dotenv.config()
const app = express();
const PORT = process.env.PORT;

app.use(express.json()) 

app.use("/api/auth",authRoute)

app.listen(PORT,()=>{
    console.log("Server is running on PORT:"+PORT);
    connectDB()
});
 