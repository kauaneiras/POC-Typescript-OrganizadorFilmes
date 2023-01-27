import express  from "express";
import { getAllMovies } from "../controllers/moviescontroller.js";

const moviesRouter = express.Router();

moviesRouter.get("/movies", getAllMovies);

export { moviesRouter };
