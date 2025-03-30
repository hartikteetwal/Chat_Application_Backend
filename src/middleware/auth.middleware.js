import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";

export const protactRoute = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt
        if(!token) return res.status(401).json({message:"Unauthorized - No Token Provided"})
        console.log(token)
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded) return res.status(401).json({message:"Unauthorized - Invalid Token"})
            console.log(decoded)

        const user = await User.findById(decoded.userId).select("-password")
        if(!user) return res.status(404).json({message:"User not found"});
        console.log(user)

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protactRoute middleware",error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}