import { NextFunction, Request, Response } from "express";
import prisma from "../database/database.js";
import { insertMovieModel, updateMovieModel } from "../models/movieModel.js";

export async function getMovieMiddleware(req: Request, res: Response, next: NextFunction) {
    const { movie_name } = req.params;

    if(movie_name){
        const movieExists = await movieAlreadyExists(movie_name);
    
        if(!movieExists){
            return res.status(404).send("Movie not found!");
        }
    }

    next();
}

export async function insertMovieMiddleware(req: Request, res: Response, next: NextFunction) {
    const { name, media_platform } = req.body;

    const { error } = insertMovieModel.validate(req.body, { abortEarly: false })

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    const movieExists = await movieAlreadyExists(name);

    if(movieExists){
        return res.status(409).send("Movie already registered");
    }

    const platform = await prisma.platforms.findUnique({
        where: {
            name: media_platform
        }
    });

    const genre = await prisma.genres.findUnique({
        where: {
            name: req.body.genre
        }
    })

    if(!platform || !genre){
        return res.status(404).send("Gender or Platform Not Found!");
    }

    next();
}

export async function updateMovieMiddleware(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;

    const { error } = updateMovieModel.validate(req.body, { abortEarly: false })

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    const movieExists = await movieAlreadyExists(name);

    if(!movieExists){
        return res.status(404).send("Movie not found!");
    }

    next();
}

export async function deleteMovieMiddleware(req: Request, res: Response, next: NextFunction) {
    const { movie } = req.headers;

    const movieName = String(movie);

    const movieExists = await movieAlreadyExists(movieName);

    if(!movieExists){
        return res.status(404).send("Movie not found!");
    }

    next();
}

async function movieAlreadyExists(name: string) {
    const movieExists = await prisma.movies.findUnique({
        where: {
            name: name
        }
    })

    if(!movieExists) return false;

    return true;
}