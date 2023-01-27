import prisma from "../database/database.js";
import { AllMoviesList } from "../protocols/types.js";

async function findAllMovies() {
    const movies = await prisma.movies.findMany();
    const genders = await prisma.gender.findMany();
    const plataforms = await prisma.plataform.findMany();
    const movieslist: AllMoviesList[] = [];
    movies.forEach((movie) => {
        const gendersArray: string[] = [];
        const plataformsArray: string[] = [];

        genders.forEach((gender) => {
            if (gender.movie_id === movie.id) {
                gendersArray.push(gender.gender);
            }
        });

        plataforms.forEach((plataform) => {
            if (plataform.movie_id === movie.id) {
                plataformsArray.push(plataform.plataform);
            }
        });

        const movieList: AllMoviesList = {
            id: movie.id,
            title: movie.title,
            genders: gendersArray,
            plataforms: plataformsArray.join(", "),
        };

        movieslist.push(movieList);
    }
    );

    console.log(movieslist);
    return movieslist;    
}


export { findAllMovies };