import { findAllMovies, postWatchedMovieRepository, postWishListRepository, 
         checkWatchedMovie, checkWishListMovieAndDelete, getWishListRepository, 
        } from "../repositories/moviesrepositories.js";
import { Request, Response } from 'express';
import httpStatus from "http-status";

async function getAllMovies(req: Request, res: Response) {
    const movies = await findAllMovies();
    res.send(movies);
}

<<<<<<< Updated upstream
export { getAllMovies };
=======
async function postWatchedMovieController(req: Request, res: Response) {
    const userId = res.locals.userId;
    const movie_id = req.body;

    const USERID : number = userId.user_id;
    const MOVIEID : number = movie_id.movie_id;

    if (userId === undefined) {
        res.sendStatus(httpStatus.UNAUTHORIZED);
        return;
    }

    if (movie_id === undefined) {
        res.sendStatus(httpStatus.BAD_REQUEST);
        return;
    }

    try{
        await checkWishListMovieAndDelete(USERID, MOVIEID);
        await postWatchedMovieRepository(USERID, MOVIEID);
        res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

async function postWishListRepositoryController(req: Request, res: Response) {
    const userId = res.locals.userId;
    const movie_id = req.body;

    const USERID : number = userId.user_id;
    const MOVIEID : number = movie_id.movie_id;

    if (userId === undefined) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }

    if (movie_id === undefined) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }

    try{
        const check = await checkWatchedMovie(USERID, MOVIEID);
        if(check !== null){
            return res.status(httpStatus.BAD_REQUEST).send("You already watched this movie");
        }
        await postWishListRepository(USERID, MOVIEID);
        res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

async function getWishListController(req: Request, res: Response) {
    const userId = res.locals.userId;
    const USERID : number = userId.user_id;

    if (userId === undefined) {
        return res.sendStatus(httpStatus.UNAUTHORIZED);
    }

    try{
        const wishList = await getWishListRepository(USERID);
        if (wishList.length === 0) {
            return res.status(httpStatus.NOT_FOUND).send("You don't have any movie in your wish list");
        }
        res.status(httpStatus.OK).send(wishList);
    } catch (error) {
        res.sendStatus(httpStatus.BAD_REQUEST);
    }
}


export { getAllMovies, postWatchedMovieController, postWishListRepositoryController, getWishListController };
>>>>>>> Stashed changes
