import {Router} from "express";
import {prisma} from "../../lib/prisma";
// import {checkToken} from "../middlewares/checkToken";

export const MielsController = Router();

MielsController.get("/", async (req, res) => {
    let miels;
    if (req.query) {
        const {tags} = req.query as { tags: string };
        let tagList = tags ? tags.split(",") : []
        miels = await prisma.miels.findMany({
            include: {
                tags: {
                    where: {
                        nom: {
                            in: tagList
                        }
                    }
                }
            }
        })
    } else {
        miels = await prisma.miels.findMany()
    }
    res.json({miels}).status(200)
})

MielsController.get("/:id", async (req, res) => {
    const miel = await prisma.miels.findFirst({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json({miel}).status(200)
})

MielsController.post("/", async (req, res) => {
    const {nom, description, prix} = req.body;
    const miel = await prisma.miels.create({
        data: {
            nom,
            description,
            prix
        }
    })
    res.json({miel}).status(200);
})

MielsController.put("/:id/prix/:prix", async (req, res) => {
    const {nom, description} = req.body;
    const miel = await prisma.miels.update({
        where: {
            id: parseInt(req.params.id),
            prix: parseInt(req.params.prix)
        },
        data: {
            nom: nom,
            description: description
        }
    })
    res.json({miel}).status(200);
})

MielsController.delete("/:id", async (req, res) => {
    const miel = await prisma.miels.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json({miel}).status(200)
})