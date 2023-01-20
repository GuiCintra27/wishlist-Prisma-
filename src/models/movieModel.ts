import Joi from "joi";

export const insertMovieModel = Joi.object({
    name: Joi.string().required(),
    media_platform: Joi.string().required(),
    genre: Joi.string().required(),
    viewed: Joi.boolean().required(),
    note: Joi.string().required().allow("")
});

export const updateMovieModel = Joi.object({
    name: Joi.string().required(),
    viewed: Joi.boolean().required(),
    note: Joi.string().required().allow("")
});