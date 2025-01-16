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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const crypto_1 = require("crypto");
const prisma_1 = require("../../lib/prisma");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = require("express");
exports.AuthController = (0, express_1.Router)();
exports.AuthController.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield prisma_1.prisma.users.findFirst({
        where: {
            username,
            password
        }
    });
    if (user) {
        let { token } = user;
        res.json({ letoken: token }).status(200);
    }
}));
exports.AuthController.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const mdpHash = (0, crypto_1.createHash)('sha256').update(password).digest('base64');
    const token = jsonwebtoken_1.default.sign(username, process.env.TOKEN_SECRET);
    const newUser = yield prisma_1.prisma.users.create({
        data: {
            username: username,
            password: mdpHash,
            token
        }
    });
    if (newUser) {
        res.json({ newUser }).status(200);
    }
    else {
        res.json({ error: "User creation impossible" }).status(400);
    }
}));
