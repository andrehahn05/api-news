import { Router } from "express";
import NewsController from "../controllers/NewsController";
const newsController  = new NewsController();


const newsRouter = Router();
newsRouter.route("/").get(newsController.index);
newsRouter.route("/").post(newsController.store);

export default newsRouter;

