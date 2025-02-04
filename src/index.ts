import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { MielsController } from "./controllers/MielsController"
import {TagsController} from "./controllers/TagsController";
import {UsersController} from "./controllers/UsersController";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors())


app.use("/miels", MielsController)
app.use("/tags", TagsController)
app.use("/", UsersController)
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
