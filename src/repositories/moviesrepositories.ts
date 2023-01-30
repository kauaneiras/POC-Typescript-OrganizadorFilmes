import prisma from "../database/database.js";
import { AllMoviesList } from "../protocols/types.js";

async function findAllMovies() {
    const movies = await prisma.movies.findMany({
        include: { gender: true, plataform: true, },
    });

    const movieslist: AllMoviesList[] = [];

    for (const movie of movies) {
        const movieList: AllMoviesList = {
            id: movie.id,
            title: movie.title,
            genders: movie.gender.map(gender => gender.gender),
            plataforms: movie.plataform.map(plataform => plataform.plataform).join(", "),
        };

        movieslist.push(movieList);
    }
    return movieslist;
}

async function postWatchedMovieRepository() {
    
}


export { findAllMovies };