import 'dotenv/config';
import express from 'express';
import './mongoose/connection';

class StartUp {
  public app: express.Application;

  constructor() {
    this.app = express();
  }
}

export default new StartUp();
