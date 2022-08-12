import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';
import newsController from "../controllers/NewsController";

const newsRouter = Router();
newsRouter.get("/",newsController.index);
newsRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      hat: Joi.string().required(),
      title: Joi.string().required(),
      text: Joi.string().required(),      
      author: Joi.string().required(),      
      img: Joi.string().required(),      
      link: Joi.string().required(),
      active:Joi.boolean().default(true),
    },
  }),
newsController.store);

newsRouter.get(
  "/show/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
newsController.show);

newsRouter.put(
  "/:id",
  celebrate({
     [Segments.PARAMS]: {
       id: Joi.string().required(),
    },
    [Segments.BODY]: {
      hat: Joi.string(),
      title: Joi.string(),
      text: Joi.string(),      
      author: Joi.string(),      
      img: Joi.string(),      
      link: Joi.string(),
      active:Joi.boolean(),
    },
  }),
newsController.update);

newsRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
newsController.delete);

export default newsRouter;

