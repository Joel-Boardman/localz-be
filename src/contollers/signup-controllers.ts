import { Request, Response } from "express";

// Custom Functions
const { accessLogStream } = require("../utils/logger");

// NPM Packages
const moment = require("moment");

exports.handleSignup = (req: Request, res: Response) => {
  try {
    let data = req.body;

    if (data.password !== data.confirm_password) {
      throw Error("Passwords do not match");
    }

    res.send({
      success: true,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      accessLogStream.write(
        moment().format("MMMM Do YYYY, h:mm:ss a") +
          " : " +
          "[ERROR]: [ROUTE - SIGNUP-CONTROLLER - handleSignup] : --- :" +
          err.toString() +
          "\n \n"
      );

      res.status(422).send({
        success: false,
        message: err.message,
      });
    }
  }
};
