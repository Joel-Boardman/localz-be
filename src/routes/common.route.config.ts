import express, { Router } from "express";

export abstract class RouteConfig {
  router: Router;
  name: string;
  constructor(router: Router, name: string) {
    this.name = name;
    this.router = router;
    this.configureRoutes();
  }

  getName() {
    return this.name;
  }

  abstract configureRoutes(): Router;
}
