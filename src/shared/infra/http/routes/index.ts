import { Router } from 'express';
import newsRouter from '@modules/news/infra/http/routes/news.routes';
import userRouter from '@src/modules/users/infra/http/routes/user.routes';
import sessionsRoutes from '@src/modules/users/infra/http/routes/sessions.routes ';
const routes = Router();

routes.use('/api/v1/news',newsRouter)
routes.use('/api/v1/user',userRouter)
routes.use('/api/v1/session',sessionsRoutes)

export default routes;