
import CreateUserService from "@src/modules/users/services/CreateUserService";
import { Request, Response } from "express";


class UserController {
  public async store(req:Request, res:Response):Promise<Response>{
    const data = req.body;

    const user = await CreateUserService.execute({...data});

    return res.json({user:user.display()})
  }
}

export default new UserController;