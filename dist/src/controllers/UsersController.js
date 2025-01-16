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
exports.UsersController = void 0;
const express_1 = require("express");
const prisma_1 = require("../../lib/prisma");
const { createHash } = require('crypto');
const jwt = require('jsonwebtoken');
exports.UsersController = (0, express_1.Router)();
exports.UsersController.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma_1.prisma.users.findMany();
    res.json({ users }).status(200);
}));
exports.UsersController.get("/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.prisma.users.findFirst({
        where: {
            username: req.params.username
        }
    });
    res.json({ user }).status(200);
}));
exports.UsersController.delete("/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.prisma.users.delete({
        where: {
            username: req.params.username
        }
    });
    res.json({ user }).status(200);
}));
exports.UsersController.put("/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = req.body;
    const mdpHash = createHash('sha256').update(password).digest('base64');
    const user = yield prisma_1.prisma.users.update({
        where: {
            username: req.params.username
        },
        data: {
            password: mdpHash,
        }
    });
    res.json({ user }).status(200);
}));
