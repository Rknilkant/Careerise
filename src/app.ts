import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import authRouter from "./routes/authRoute";

const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routers
app.use("/auth", authRouter);

app.get("/:id", (req, res) => {
	res.send(`Hello ${req.body.param.id}`);
});

app.listen(8000, () => {
	console.log("server running on http://localhost:8080");
});
