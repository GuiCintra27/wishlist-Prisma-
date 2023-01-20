import { Request, Response } from "express";
import { getPlatformsRepository } from "../repositories/platformsRepository.js";

export async function getPlatforms(req: Request, res: Response) {
  try {
    const platforms = await getPlatformsRepository();

    return res.status(200).send(platforms);
  } catch (error) {
    return res.sendStatus(500);
  }
}