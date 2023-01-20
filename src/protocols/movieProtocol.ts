type MovieEntity ={
    id: number,
    name: string,
    viewed: boolean,
    note: string
};

type InsertDB = {
    platform: number,
    genre: number
}

type GetMovie = {
    media_platform: string,
    genre: string,
}

export type Movie = Omit<MovieEntity, "id"> & GetMovie;

export type InsertMovie = Omit<MovieEntity, "id"> & InsertDB;

export type UpdateOrDeleteMovie = Partial<MovieEntity>;