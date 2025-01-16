import {Router} from "express";
import {prisma} from "../../lib/prisma";
const { createHash } = require('crypto');
import {hash} from "crypto";

export const UsersController = Router();
UsersController.post("/", async (req, res) => {
    const {nom_utilisateur, mdp} = req.body;
    const mdpHash = createHash('sha256').update(mdp).digest('base64');
    const user = await prisma.users.findFirst({
        where: {
            username: nom_utilisateur,
            password: mdpHash
        }
    })
    if (user) {
        let { token } = user
        res.json({letoken : token}).status(200);
    }
})
