import { Router } from "express";

const router = Router();

router.get("/signup", (req, res) => {
	let username = req.body.username;
	let pass = req.body.pass;
	res.send(201).send(`User created ${username}: password ${pass}`);
});

router.get("/signin", (req, res) => {
	let username = req.body.username;
	res.send(201).send(`User login ${username}: password`);
});

export default router;
