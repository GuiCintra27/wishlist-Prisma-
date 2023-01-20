import { Router } from "express";
import { getPlatforms } from "../controllers/platformsController.js";

const platformRouter = Router();

platformRouter
    .get("/", getPlatforms)

export default platformRouter;