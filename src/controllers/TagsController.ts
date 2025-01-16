import {Router} from "express";
import {prisma} from "../../lib/prisma";

export const TagsController = Router()

TagsController.post("/", async (req, res) => {
    const {tag} = req.body;
    const newTag = await prisma.tags.create({
        data: {
            nom: tag
        }
    })
    res.json({tag: newTag}).status(200)
})

TagsController.get("/", async (req, res) => {
    const tags = await prisma.tags.findFirst();
    res.json({tags}).status(200);
})

TagsController.get("/:id", async (req, res) => {
    const tag = await prisma.tags.findFirst({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json({tag}).status(200)
})

TagsController.put("/:id", async (req, res) => {
    const {tag} = req.body;
    const updatedTag = await prisma.tags.update({
        where: {
            id: parseInt(req.params.id)
        }, data: {
            tag: tag
        }
    })
    res.json({updatedTag}).status(200)
})

TagsController.delete("/:id", async (req, res) => {
    const tag = await prisma.tags.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json({tag}).status(200)
})