import connection from "../database/database.js";
import { Movie } from "../protocols/movieProtocol.js";

export async function insertMovieService(newMovie: Movie) {
    const { name, media_platform, viewed, note } = newMovie;
    try {
        const platform = await connection.query(`
            SELECT id
            FROM platforms
            WHERE name = $1
        `,
            [media_platform]
        );

        const genre = await connection.query(`
            SELECT id
            FROM genres
            WHERE name = $1
        `,
            [newMovie.genre]
        );

        const movie = { name, platform: platform.rows[0].id, genre: genre.rows[0].id, viewed, note };

        return movie;
    } catch (error) {
        console.log(error)
        throw Error(error);
    }
}