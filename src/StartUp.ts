import 'dotenv/config';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import './shared/infra/http/connection';
import routes from './shared/infra/http/routes';
import AppError from './shared/errors/AppError';

class StartUp {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
    this.appError();
  }

  routes() {
    this.app.use(routes);
  }

  middleware() {
    this.app.use(express.json());
  }

  appError() {
    this.app.use(
      (error: Error, req: Request, resp: Response, next: NextFunction) => {
        if (error instanceof AppError) {
          return resp.status(error.statusCode).json({
            status: 'error',
            message: error.message,
          });
        }
        next();

        // console.log(error);

        return resp.status(500).json({
          status: 'error',
          message: 'Internal server error',
        });
      },
    );
  }
}

export default new StartUp();
