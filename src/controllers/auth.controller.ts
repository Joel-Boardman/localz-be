import { Request, Response, NextFunction } from "express";

// NPM Packages
const moment = require("moment");

// Utilities
const { accessLogStream } = require("../util/logger.util");

// Services
import AuthService from "../services/auth.service";

class AuthController {
  constructor() {}

  async login(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (err) {
      if (err instanceof Error) {
        accessLogStream.write(
          moment().format("MMMM Do YYYY, h:mm:ss a") +
            " : " +
            "[ERROR]: [ROUTE - AUTH-CONTROLLER - Login] : --- :" +
            err.toString() +
            "\n \n"
        );

        return res.status(422).send({
          success: false,
          message: err.message,
        });
      }
    }
  }

  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      let data = req?.body;

      // let user = await AuthService.findUserByEmail(data?.email);

      // if (user instanceof Error || user) {
      //   throw Error(user.message);
      // }

      res.send("Hello you have  signed up");
    } catch (err) {
      if (err instanceof Error) {
        accessLogStream.write(
          moment().format("MMMM Do YYYY, h:mm:ss a") +
            " : " +
            "[ERROR]: [ROUTE - AUTH-CONTROLLER - Signup] : --- :" +
            err.toString() +
            "\n \n"
        );

        return res.status(422).send({
          success: false,
          message: err.message,
        });
      }
    }
  }
}

export default new AuthController();
