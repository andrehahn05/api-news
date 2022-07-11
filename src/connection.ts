import mongoose from "mongoose";

class Database {
  constructor() {
    this.init();
  }

  init() {
    mongoose.connect(process.env.MONGO_URI as string)
    .then( _ => console.log("MongoDb On ..."))
    .catch(e => console.log(e));
  }
}

export default new Database();
