import {createHash} from "crypto";
import {prisma} from "../../lib/prisma";
import jwt from "jsonwebtoken";
import {UsersController} from "./UsersController";
import {Router} from "express";

export const AuthController = Router();

AuthController.post("/login", async (req, res) => {
    const {username, password} = req.body as {username : string, password : string};
    const user = await prisma.users.findFirst({
        where: {
            username,
            password
        }
    })
    if (user) {
        let { token } = user
        res.json({letoken : token}).status(200);
    }
})

AuthController.post('/signup', async (req, res) => {
    const {username, password} = req.body as {username : string, password : string};
    const mdpHash = createHash('sha256').update(password).digest('base64');
    const token = jwt.sign(username, process.env.TOKEN_SECRET);
    const newUser = await prisma.users.create({
        data: {
            username: username,
            password: mdpHash,
            token
        }
    })
    if (newUser) {
        res.json({newUser}).status(200);
    } else {
        res.json({error: "User creation impossible"}).status(400);
    }
})