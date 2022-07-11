import { Router } from "express";
import newsRouter from "@modules/news/infra/http/routes/news.routes";

const routes = Router();

routes.use('/api/v1/news',newsRouter)


export default routes;