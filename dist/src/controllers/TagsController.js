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
exports.TagsController = void 0;
const express_1 = require("express");
const prisma_1 = require("../../lib/prisma");
exports.TagsController = (0, express_1.Router)();
exports.TagsController.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tag } = req.body;
    const newTag = yield prisma_1.prisma.tags.create({
        data: {
            nom: tag
        }
    });
    res.json({ tag: newTag }).status(200);
}));
exports.TagsController.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tags = yield prisma_1.prisma.tags.findFirst();
    res.json({ tags }).status(200);
}));
exports.TagsController.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tag = yield prisma_1.prisma.tags.findFirst({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.json({ tag }).status(200);
}));
exports.TagsController.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tag } = req.body;
    const updatedTag = yield prisma_1.prisma.tags.update({
        where: {
            id: parseInt(req.params.id)
        }, data: {
            nom: tag
        }
    });
    res.json({ updatedTag }).status(200);
}));
exports.TagsController.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tag = yield prisma_1.prisma.tags.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.json({ tag }).status(200);
}));
