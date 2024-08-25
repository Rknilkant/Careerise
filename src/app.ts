import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from './config/database';
import http from 'http';
import { Server } from 'socket.io';

import authRouter from "./routes/authRoute";
import profileRouter from "./routes/profileRoutes";
import userRouter from "./routes/userRoutes";
import chatRouter from "./routes/chatRoutes"; // Import chat routes
import ChatModel from './models/chatModel';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Connecting MongoDB
connectDB(); 

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routers
app.use("/auth", authRouter);
app.use("/profiles", profileRouter); 
app.use("/users", userRouter); 
app.use("/chats", chatRouter); // Use chat routes

// Socket.IO connection handler
io.on("connection", (socket) => {
    console.log("A user connected");

    // Listen for incoming messages
    socket.on("sendMessage", async (message) => {
        try {
            const newMessage = await ChatModel.create(message);
            io.emit("receiveMessage", newMessage); // Emit message to all connected clients
        } catch (error) {
            console.error("Error sending message:", error);
        }
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

// Start the server
server.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
