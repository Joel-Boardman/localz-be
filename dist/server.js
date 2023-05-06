"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ----* Express Config *---- //
const express = require("express");
const app = express();
// ---- * Socket Config *---- //
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer, {});
io.on("connection", (socket) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("a user connected", socket.id);
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
}));
const dotenv = require("dotenv");
dotenv.config();
//  ----* Packages *---- //
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
var bodyParser = require("body-parser");
// ----* Middleware *---- //
let accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
    flags: "a",
});
app.use(morgan("tiny", { stream: accessLogStream }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ----* Routes *---- //
const loginRoute = require("./routes/login-route");
const signupRoute = require("./routes/signup-route");
// ----* Route Grouping *---- //
app.use(loginRoute);
app.use("/signup", signupRoute);
// ----* Init *---- //
const port = process.env.PORT;
httpServer.listen(port);
console.log("listening");
