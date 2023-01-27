import { findAllMovies } from "../repositories/moviesrepositories.js";
import { Request, Response } from 'express';

async function getAllMovies(req: Request, res: Response) {
    const movies = await findAllMovies();
    res.send(movies);
}

export { getAllMovies };