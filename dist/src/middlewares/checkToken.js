"use strict";
// import {NextFunction} from "express";
//
// const jwt = require('jsonwebtoken');
//
// export function checkToken(req : Request, res : Response, next : NextFunction) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//
//     if (token == null) return res.json({error: "No token provided"}).status(401)
//
//     jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
//         console.log(err)
//
//         if (err) return res.sendStatus(403)
//
//         req.user = user
//
//         next()
//     })
// }
