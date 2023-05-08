import { Router } from "express";
const router: Router = Router();

// Types
import { RouteConfig } from "./common.route.config";

// Middleware
const { authUser } = require("../middlewares/authUser.middleware");

// Controllers
import AuthController from "../controllers/auth.controller";

class AuthRoutes extends RouteConfig {
  constructor(router: Router) {
    super(router, "AuthRoutes");
  }

  configureRoutes() {
    this.router.post("/login", AuthController.login);
    this.router.get("/signup", AuthController.signup);

    return this.router;
  }
}

module.exports = new AuthRoutes(router).configureRoutes();
