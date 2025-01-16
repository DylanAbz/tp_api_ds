import {Router} from "express";
import {prisma} from "../../lib/prisma";
const { createHash } = require('crypto');
import {hash} from "crypto";
import {userInfo} from "os";
const jwt = require('jsonwebtoken');

export const UsersController = Router();


UsersController.get("/", async (req, res) => {
    const users = await prisma.users.findMany();
    res.json({users}).status(200);
})

UsersController.get("/:username", async (req, res) => {
    const user = await prisma.users.findFirst({
        where: {
            username: req.params.username
        }
    })
    res.json({user}).status(200)
})

UsersController.delete("/:username", async (req, res) => {
    const user = await prisma.users.delete({
        where: {
            username: req.params.username
        }
    })
    res.json({user}).status(200)
})

UsersController.put("/:username", async (req, res) => {
    const {password} = req.body;
    const mdpHash = createHash('sha256').update(password).digest('base64');
    const user = await prisma.users.update({
        where: {
            username: req.params.username
        },
        data: {
            password: mdpHash,
        }
    })
    res.json({user}).status(200)
})