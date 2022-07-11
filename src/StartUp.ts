import 'dotenv/config';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import './connection';
// import newsRouter from '@modules/news/infra/http/routes/news.routes';
import routes from './routes';
import AppError from './errors/AppError';

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
        console.log(error);

        return resp.status(500).json({
          status: 'error',
          message: 'Internal server error',
        });
      },
    );
  }
}

export default new StartUp();
