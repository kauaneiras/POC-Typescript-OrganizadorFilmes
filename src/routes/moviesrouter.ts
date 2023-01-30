import express  from "express";
import { getAllMovies, postWatchedMovieController, postWishListRepositoryController, getWishListController } from "../controllers/moviescontroller.js";
import { authMiddleware } from "../middlewares/authmiddleware.js";

const moviesRouter = express.Router();

<<<<<<< Updated upstream
moviesRouter.get("/movies", getAllMovies);
=======
moviesRouter
.all("*", authMiddleware)
.get("/movies", getAllMovies)
.post("/watched", postWatchedMovieController)
.post("/wishlist", postWishListRepositoryController)
.get("/wishlist", getWishListController)

>>>>>>> Stashed changes

export { moviesRouter };
