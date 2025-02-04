"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const MielsController_1 = require("./controllers/MielsController");
const TagsController_1 = require("./controllers/TagsController");
const UsersController_1 = require("./controllers/UsersController");
const AuthController_1 = require("./controllers/AuthController");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/miels", MielsController_1.MielsController);
app.use("/tags", TagsController_1.TagsController);
app.use("/users", UsersController_1.UsersController);
app.use("/auth", AuthController_1.AuthController);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
