import { Router, Request, Response } from "express";
const router = Router();

// Packages
const moment = require("moment");
const path = require("path");

// Controllers
const signupControllers = require("../controllers/user.controller");

// Get User data
router.get("/get-user", async (req: Request, res: Response) => {});

// Create new User
router.post("/create-user", signupControllers.createUser);

// Update User data
router.post("/update-user", signupControllers.createUser);

// Delete User
router.delete("/delete-user", signupControllers.createUser);

module.exports = router;
