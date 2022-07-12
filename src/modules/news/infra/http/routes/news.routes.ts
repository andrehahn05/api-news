import { Router } from "express";
import NewsController from "../controllers/NewsController";
const newsController  = new NewsController();


const newsRouter = Router();
newsRouter.route("/").get(newsController.index);
newsRouter.route("/").post(newsController.store);
newsRouter.route("/:id").get(newsController.show);
newsRouter.route("/:id").put(newsController.update);
newsRouter.route("/:id").delete(newsController.delete);

export default newsRouter;

