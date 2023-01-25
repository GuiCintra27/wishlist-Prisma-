import prisma from "../database/database.js";
import { Movie } from "../protocols/movieProtocol.js";

export async function insertMovieService(newMovie: Movie) {
    const { name, media_platform, viewed, note } = newMovie;
    try {
        const platform = await prisma.platforms.findUnique({
            where:{
                name: media_platform
            }
        })

        const genre = await prisma.genres.findUnique({
            where: {
                name: newMovie.genre
            }
        })

        const movie = { name, platform_id: platform.id, genre_id: genre.id, viewed, note };

        return movie;
    } catch (error) {
        console.log(error)
        throw Error(error);
    }
}