import { Router } from "express";

// ----* Express Config *---- //
const express = require("express");
const app = express();

// ---- * Socket Config *---- //
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, {});

io.on("connection", async (socket: any) => {
  console.log("a user connected", socket.id);

  socket.on("chat message", (msg: string) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const dotenv = require("dotenv");
dotenv.config();

//  ----* Packages *---- //
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
var bodyParser = require("body-parser");

//  ----* CORS *---- //
let corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  optionsSuccessStatus: 200,
};

// ----* Middleware *---- //
let accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});
app.use(morgan("tiny", { stream: accessLogStream }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// ----* Routes *---- //
const initRoute = require("./routes/init.route");
const loginRoute = require("./routes/login.route");
const signupRoute = require("./routes/signup.route");
const authRoutes = require("./routes/auth.route");

// ----* Route Grouping *---- //
app.use(authRoutes);

// app.use(loginRoute);
// app.use("/signup", signupRoute);

// ----* Init *---- //
const port = process.env.PORT;
httpServer.listen(port);
console.log("listening");
