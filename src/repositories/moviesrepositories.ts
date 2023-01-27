import { prisma } from "@prisma/client";

async function findAllMovies() {
    return await prisma.movies.findMany();
}


export {findAllMovies, findMoviesById};