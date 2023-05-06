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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Packages
const moment = require("moment");
const path = require("path");
const { accessLogStream } = require("../utils/logger");
// Check if the server is currently running.
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const basicChatForm = path.resolve(__dirname, "../html/signup/index.html");
        res.sendFile(basicChatForm);
    }
    catch (err) {
        if (err instanceof Error) {
            accessLogStream.write(moment().format("MMMM Do YYYY, h:mm:ss a") +
                " : " +
                "[ERROR]: [ROUTE - SIGNUP-ROUTE] : --- :" +
                err.toString() +
                "\n \n");
            res.status(422).send({
                success: false,
                message: err.message,
            });
        }
    }
}));
// Check if the server is currently running.
router.post("/create-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        if (data.password !== data.confirm_password) {
            throw Error("Passwords do not match");
        }
    }
    catch (err) {
        if (err instanceof Error) {
            accessLogStream.write(moment().format("MMMM Do YYYY, h:mm:ss a") +
                " : " +
                "[ERROR]: [ROUTE - SIGNUP-ROUTE] : --- :" +
                err.toString() +
                "\n \n");
            res.status(422).send({
                success: false,
                message: err.message,
            });
        }
    }
}));
module.exports = router;
