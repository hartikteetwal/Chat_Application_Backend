import express from "express";
import { protactRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUserForSidebar, sendMessage } from "../controllers/message.controller.js";
const router = express.Router();

router.get("/users",protactRoute,getUserForSidebar)
router.get("/:id",protactRoute,getMessages)

router.post("/send/:id",protactRoute,sendMessage)

export default router