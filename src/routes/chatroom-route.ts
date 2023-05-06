import { Router, Request, Response } from "express";
const router = Router();

// Packages
const moment = require("moment");
const path = require("path");
const accessLogStream = require("../utils/logger");

// Check if the server is currently running.
router.get("/chat", async (req: Request, res: Response) => {
  try {
  } catch (err: unknown) {
    if (err instanceof Error) {
      accessLogStream.write(
        moment().format("MMMM Do YYYY, h:mm:ss a") +
          " : " +
          "[ERROR]: [ROUTE - INIT-ROUTE] : --- :" +
          err.toString() +
          "\n \n"
      );

      res.status(422).send({
        success: false,
        message: err.message,
      });
    }
  }
});
module.exports = router;
