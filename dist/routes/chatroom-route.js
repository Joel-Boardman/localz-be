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
const accessLogStream = require("../utils/logger");
// Check if the server is currently running.
router.get("/chat", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const basicChatForm = path.resolve(__dirname, "../html/chat/index.html");
        res.sendFile(basicChatForm);
    }
    catch (err) {
        if (err instanceof Error) {
            accessLogStream.write(moment().format("MMMM Do YYYY, h:mm:ss a") +
                " : " +
                "[ERROR]: [ROUTE - INIT-ROUTE] : --- :" +
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
