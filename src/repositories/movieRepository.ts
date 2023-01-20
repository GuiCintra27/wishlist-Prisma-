import connection from "../database/database.js";
import { InsertMovie, UpdateOrDeleteMovie } from "../protocols/movieProtocol.js";

export async function getMovieRepository(movie: string | string[]) {
    let query = ``;
    let result = [];

    if(movie){
        query = `WHERE m.name = $1`;
        result = [movie]
    }

    try {
        const movieData = await connection.query(`
            SELECT m.id, m.name, p.name as media_platform, g.name as genre, m.viewed, m.note
            FROM movies as m
                JOIN  platforms as p
                    ON p.id = m.platform_id
                JOIN genres as g
                    ON g.id = m.genre_id
        ` + query, result
        );

        if(movie) return movieData.rows[0];

        return movieData.rows;
    } catch (error) {
        throw error;
    }
}

export async function insertMovieRepository(movie: InsertMovie) {
    try {
        await connection.query(`
            INSERT INTO movies(name, platform_id, genre_id, viewed, note)
              VALUES($1, $2, $3, $4, $5)
        `,
            [movie.name, movie.platform, movie.genre, movie.viewed, movie.note]
        );
    } catch (error) {
        throw error;
    }
}

export async function updateMovieRepository(movie: UpdateOrDeleteMovie) {
    try {
        await connection.query(`
            UPDATE movies
            SET viewed = $2, note = $3
            WHERE name = $1
        `,
            [movie.name, movie.viewed, movie.note]
        );
    } catch (error) {
        throw error;
    }
}

export async function deleteMovieRepository(movie: UpdateOrDeleteMovie) {
    try {
        await connection.query(`
            DELETE FROM movies
            WHERE name = $1
        `,
            [movie.name]
        );
    } catch (error) {
        throw error;
    }
}