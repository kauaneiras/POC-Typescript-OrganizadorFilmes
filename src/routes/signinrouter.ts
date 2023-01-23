import express from "express";
import { signupController } from "../controllers/signincontroller.js";


const signinRouter = express.Router();

signinRouter.post("/signin", signupController);

export {signinRouter};
