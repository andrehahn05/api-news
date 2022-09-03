import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import userController from '../controllers/UserController';

const userRouter = Router();

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

export default userRouter;
