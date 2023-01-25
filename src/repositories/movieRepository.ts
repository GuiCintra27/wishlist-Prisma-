import prisma from "../database/database.js";
import { InsertMovie, UpdateOrDeleteMovie } from "../protocols/movieProtocol.js";

export async function getMovieRepository(movie: string) {
    try {
        if (movie) {
            const movieData = await prisma.movies.findMany({
                where: {
                    name: movie || ''
                },
                select: {
                    id: true, name: true, viewed: true, note: true,
                    platforms: {
                        select: {
                            name: true
                        }
                    },
                    genres: {
                        select: {
                            name: true
                        }
                    },
                }
            })

            return movieData.map(item => { return { id: item.id, name: item.name, platform: item.platforms.name, genre: item.genres.name, viewed: item.viewed, note: item.note } });
        } 
        
        const movieData = await prisma.movies.findMany({
            select: {
                id: true, name: true, viewed: true, note: true,
                platforms: {
                    select: {
                        name: true
                    }
                },
                genres: {
                    select: {
                        name: true
                    }
                },
            }
        })

        return movieData.map(item => { return { id: item.id, name: item.name, platform: item.platforms.name, genre: item.genres.name, viewed: item.viewed, note: item.note } });

    } catch (error) {
        throw error;
    }
}

export async function insertMovieRepository(movie: InsertMovie) {
    try {
        await prisma.movies.create({
            data: movie
        });
    } catch (error) {
        throw error;
    }
}

export async function updateMovieRepository(movie: UpdateOrDeleteMovie) {
    try {
        await prisma.movies.update({
            where: {
                name: movie.name || ''
            },
            data: {
                viewed: movie.viewed,
                note: movie.note
            }
        })
    } catch (error) {
        throw error;
    }
}

export async function deleteMovieRepository(movie: string) {
    try {
        await prisma.movies.delete({
            where: {
                name: movie
            }
        })
    } catch (error) {
        throw error;
    }
}