import { Request, Response, NextFunction } from "express";

export interface authInfoRequest extends Request {
  user: string; // or any other type
}

function authUser(req: any, res: Response, next: NextFunction) {
  if (!req?.body.user) {
    res.status(401);
    return res.send("You need to sign in");
  }
  next();
}

module.exports = { authUser };
