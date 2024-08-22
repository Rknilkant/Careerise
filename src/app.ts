import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from './config/database';

import authRouter from "./routes/authRoute";
import profileRouter from "./routes/profileRoutes";
import userRouter from "./routes/userRoutes";

const app = express();

// Connecting MongoDB
connectDB(); 

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routers
app.use("/auth", authRouter);
app.use("/profiles", profileRouter); 
app.use("/users", userRouter); 

app.get("/:id", (req, res) => {
  res.send(`Hello ${req.params.id}`);
});

// Start the server
app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
