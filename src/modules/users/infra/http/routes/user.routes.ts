import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import userController from '../controllers/UserController';
import { authenticated } from '@src/shared/infra/http/middleware/authenticated';

const userRouter = Router();
userRouter.get('/list', userController.index);
userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  userController.store,
);

userRouter.use(authenticated);
userRouter.get(
  '/show/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  userController.show,
);

userRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  userController.delete,
);

userRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string(),
    },
  }),
  userController.update,
);
export default userRouter;
