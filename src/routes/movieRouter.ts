import { Router } from "express";
import {deleteMovie, getMovie, insertMovie, updateMovie} from "../controllers/moviesController.js";
import {deleteMovieMiddleware, getMovieMiddleware, insertMovieMiddleware, updateMovieMiddleware} from "../middlewares/movieMiddleware.js";

const movieRouter = Router();

movieRouter
    .get("/", getMovieMiddleware, getMovie)
    .get("/:movie_name", getMovieMiddleware, getMovie)
    .post("/", insertMovieMiddleware, insertMovie)
    .patch("/", updateMovieMiddleware, updateMovie)
    .delete("/", deleteMovieMiddleware, deleteMovie)

export default movieRouter;