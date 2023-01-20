import connection from "../database/database.js";

export async function getPlatformsRepository() {
    try {
        const platforms = await connection.query(`
            SELECT p.name, count(m.*) as movies
            FROM movies AS m 
                JOIN platforms AS p
                    ON p.id = m.platform_id
            GROUP BY p.name
            ORDER BY movies DESC
        `);

        return platforms.rows;
    } catch (error) {
        throw error;
    }
}