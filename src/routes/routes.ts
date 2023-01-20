import { Router } from "express";
import movieRouter from "./movieRouter.js";
import platformRouter from "./platformsRoute.js";

const router = Router();

router
    .use("/movie", movieRouter)
    .use("/platforms", platformRouter);

export default router;