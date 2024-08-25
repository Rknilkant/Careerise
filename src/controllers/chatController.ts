import { Request, Response } from "express";
import ChatModel from "../models/chatModel";

// Sending messages
export const sendMessage = async (req: Request, res: Response) => {
    try {
        const { sender, receiver, message } = req.body;
        const newMessage = new ChatModel({ sender, receiver, message });
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: "Failed to send message" });
    }
};

// Fetching chat messages between two users
export const getChat = async (req: Request, res: Response) => {
    try {
        const { sender, receiver } = req.params;
        const chat = await ChatModel.find({
            $or: [
                { sender, receiver },
                { sender: receiver, receiver: sender }
            ]
        }).sort({ timestamp: 1 }); // Sorting by timestamp

        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch messages" });
    }
};
