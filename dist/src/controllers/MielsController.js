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
exports.MielsController = void 0;
const express_1 = require("express");
const prisma_1 = require("../../lib/prisma");
// import {checkToken} from "../middlewares/checkToken";
exports.MielsController = (0, express_1.Router)();
exports.MielsController.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let miels;
    if (req.query) {
        const { tags } = req.query;
        let tagList = tags ? tags.split(",") : [];
        miels = yield prisma_1.prisma.miels.findMany({
            include: {
                tags: {
                    where: {
                        nom: {
                            in: tagList
                        }
                    }
                }
            }
        });
    }
    else {
        miels = yield prisma_1.prisma.miels.findMany();
    }
    res.json({ miels }).status(200);
}));
exports.MielsController.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const miel = yield prisma_1.prisma.miels.findFirst({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.json({ miel }).status(200);
}));
exports.MielsController.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nom, description, prix } = req.body;
    const miel = yield prisma_1.prisma.miels.create({
        data: {
            nom,
            description,
            prix
        }
    });
    res.json({ miel }).status(200);
}));
exports.MielsController.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nom, description } = req.body;
    const miel = yield prisma_1.prisma.miels.update({
        where: {
            id: parseInt(req.params.id),
        },
        data: {
            nom: nom,
            description: description
        }
    });
    res.json({ miel }).status(200);
}));
exports.MielsController.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const miel = yield prisma_1.prisma.miels.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.json({ miel }).status(200);
}));
