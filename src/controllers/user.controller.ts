import { Request, Response } from "express";

// Custom Functions
const { accessLogStream } = require("../util/logger.util");

// NPM Packages
const moment = require("moment");

exports.getUser = (req: Request, res: Response) => {
  try {
    res.send({
      success: true,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      accessLogStream.write(
        moment().format("MMMM Do YYYY, h:mm:ss a") +
          " : " +
          "[ERROR]: [ROUTE - SIGNUP-CONTROLLER - getUser] : --- :" +
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

exports.createUser = (req: Request, res: Response) => {
  try {
    let data = req.body;

    if (data.password !== data.confirmPassword) {
      res.status(403).send({
        success: false,
        message: "Passwords do not match.",
      });
    }

    res.send({
      success: true,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      accessLogStream.write(
        moment().format("MMMM Do YYYY, h:mm:ss a") +
          " : " +
          "[ERROR]: [ROUTE - SIGNUP-CONTROLLER - createUser] : --- :" +
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

exports.updateUser = (req: Request, res: Response) => {
  try {
    let data = req.body;

    if (data.password !== data.confirmPassword) {
      res.status(403).send({
        success: false,
        message: "Passwords do not match.",
      });
    }

    res.send({
      success: true,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      accessLogStream.write(
        moment().format("MMMM Do YYYY, h:mm:ss a") +
          " : " +
          "[ERROR]: [ROUTE - SIGNUP-CONTROLLER - updateUser] : --- :" +
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
