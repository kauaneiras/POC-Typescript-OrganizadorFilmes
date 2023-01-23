import express from "express";
import { signupController } from "../controllers/signupcontroller.js";

const signupRouter = express.Router();

signupRouter.post("/signup", signupController);

export {signupRouter};
