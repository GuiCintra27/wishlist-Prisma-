import { Request, Response } from "express";
import { deleteMovieRepository, getMovieRepository, insertMovieRepository, updateMovieRepository } from "../repositories/movieRepository.js";
import { insertMovieService } from "../services/movieService.js";

export async function getMovie(req: Request, res: Response) {
  const { movie_name } = req.params;

  try {
    const movieData = await getMovieRepository(movie_name);

    return res.status(200).send(movieData);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export async function insertMovie(req: Request, res: Response) {
  try {
    const movie = await insertMovieService(req.body);

    await insertMovieRepository(movie);

    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    await updateMovieRepository(req.body);

    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export async function deleteMovie(req: Request, res: Response) {
  const {movie} =req.headers
  try {
    await deleteMovieRepository(movie);

    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
}