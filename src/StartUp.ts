import  express  from "express";

class StartUp {
  public app: express.Application;

  constructor(){
    this.app = express();
  }
}

export default new StartUp
