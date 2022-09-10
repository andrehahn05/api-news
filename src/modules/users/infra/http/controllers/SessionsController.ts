import CreateSessionService from "@src/modules/users/services/CreateSessionService";
import { Request, Response } from "express";


class SessionsController {
  public async create(req:Request, res:Response):Promise<Response>{
    const { email,password } = req.body;

    const user = await CreateSessionService.execute({email, password});

    return res.json({user})

  }
}

export default new SessionsController;