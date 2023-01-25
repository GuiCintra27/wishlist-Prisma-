import prisma from "../database/database.js";

export async function getPlatformsRepository() {
    try {
        const platforms = await prisma.platforms.findMany({
            select: {
                name: true,
                _count:{
                    select:{
                        movies: true
                    }
                }
            }
        })

        return platforms.map(item => {return {name: item.name, movies: item._count.movies}});
    } catch (error) {
        throw error;
    }
}