import express  from "express";
import { getAllMovies } from "../controllers/moviescontroller.js";

const moviesRouter = express.Router();

moviesRouter.get("/movies", getAllMovies);
moviesRouter.post("/watched", )

export { moviesRouter };
//test