import express  from "express";
import { getAllMovies, postWatchedMovieController, postWishListRepositoryController, 
         getWishListController, postAvaliationController } from "../controllers/moviescontroller.js";
import { authMiddleware } from "../middlewares/authmiddleware.js";

const moviesRouter = express.Router();

moviesRouter
.all("*", authMiddleware)
.get("/movies", getAllMovies)
.post("/watched", postWatchedMovieController)
.post("/wishlist", postWishListRepositoryController)
.get("/wishlist", getWishListController)
.post("/avaliation", postAvaliationController);


export { moviesRouter };
