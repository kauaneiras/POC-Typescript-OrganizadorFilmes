import { findAllMovies } from "../repositories/moviesrepositories.js";
import { Request, Response } from 'express';

async function getAllMovies(req: Request, res: Response) {
    const movies = await findAllMovies();
    res.send(movies);
}

// async function postWatchedMovie(req: Request, res: Response) {
//     const userId = req.headers.authorization;
    
//     const movie = req.body;
//     const watchedMovie = await postWatchedMovieRepository(movie);
//     res.send(watchedMovie);
// }

export { getAllMovies };