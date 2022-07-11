import { Router } from "express";
import newsRoutes from '@modules/news/infra/http/routes/news.routes';

const routes = Router();

routes.use('news',newsRoutes);
routes.use('news',newsRoutes);

export default routes;