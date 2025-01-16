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