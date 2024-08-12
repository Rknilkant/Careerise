import express from "express";
import { getAllProfiles } from "../controllers/profileListController";

/*
 * ProfileListRouter: Handles all the routes related to profile listing
 * @const: router
 */
const router = express.Router();

/**
 * Gets all the profile listing data
 * @fires getAllProfiles() function
 */
router.get("/profiles", (_, res) => {
	return res.status(200).send(getAllProfiles());
});

/**
 * Gets all the profile listing data according to the filter condition.
 * @fires filterProfiles() function
 */
router.get("/filterProfiles", (req, res) => {
	const queries = req.query;
	return res.status(200).send(filterProfiles(queries));
});

/**
 * Pushs the profile as a mentor to the listing collection.
 * @fires pushProfile() function
 */
router.post("/addProfile", (req, res) => {
	pushProfile(req);
	return res.send(201).send("successfully created the mentor profile");
});
