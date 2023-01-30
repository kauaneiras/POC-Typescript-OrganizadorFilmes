import prisma from "../database/database.js";
import { AllMoviesList } from "../protocols/types.js";
import { watchedmovies, wishlist, avaliation } from "@prisma/client";


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

async function postWatchedMovieRepository(user: number, movie: number) {
    try {
        const newWatchedMovie = await prisma.watchedmovies.create({
            data: {
              users: {
                connect: { id: user }
              },
              movies: {
                connect: { id: movie }
              }
            }
          });
        return newWatchedMovie;
    } catch (error) {
        throw error;
    }
}


async function postWishListRepository(user: number, movie: number){
    
    try{
        const newWishList = await prisma.wishlist.create({
            data: {
                users: {
                connect: { id: user }
                },
                movies: {
                connect: { id: movie }
                }
            }
        });
        return newWishList;
    } catch (error) {
        throw error;
    }
}


async function checkWatchedMovie(user: number, movie: number){
    const check = await prisma.watchedmovies.findFirst({
        where: {
            users: {
                id: user
            },
            movies: {
                id: movie
            },
        }
    });
    return check;
}

async function checkWishListMovieAndDelete(user: number, movie: number){
    const check = await prisma.wishlist.findFirst({
        where: {
            users: {
                id: user
            },
            movies: {
                id: movie
            },
        }
    });
    if(check !== null){
        await prisma.wishlist.delete({
            where: {
                id: check.id
            }
        });
    }
    return check;
}

async function getWishListRepository(user:number) {

    const wishlist = await prisma.wishlist.findMany({
        where: {
            users: {
                id: user
            }
        },
        include: {
            movies: true
        }
    });
    return wishlist;
}

export { findAllMovies, postWatchedMovieRepository, postWishListRepository, 
         checkWatchedMovie, checkWishListMovieAndDelete, getWishListRepository };