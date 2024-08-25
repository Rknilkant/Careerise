import { Router } from "express";
import { sendMessage, getChat } from "../controllers/chatController";

const router = Router();

// Route to send a message
router.post("/send", sendMessage);

// Route to get chat messages between two users
router.get("/:sender/:receiver", getChat);

export default router;
