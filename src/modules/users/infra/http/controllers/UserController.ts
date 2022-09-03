
import { IUser } from '@modules/users/models/IUser';
import CreateUserService from "@src/modules/users/services/CreateUserService";
import ListUserService from '@src/modules/users/services/ListUserService';
import ShowUserService from '@src/modules/users/services/ShowUserService ';
import { Request, Response } from "express";
import DeleteUserService from '@src/modules/users/services/DeleteUserService ';
import UpdateUserService from '@src/modules/users/services/UpdateUserService';


class UserController {
  public async store(req:Request, res:Response):Promise<Response>{
    const data = req.body;
    
    const user = await CreateUserService.execute({...data});

    return res.json({user:user.display()})
  }

  public async show(req:Request, res:Response):Promise<Response | IUser>{
    const _id = req.params.id ;

    const user = await ShowUserService.execute(_id);

    return res.json({user:user.display()})

  }
  
  public async delete(req:Request, res:Response):Promise<Response>{
    const _id = req.params.id;

    await DeleteUserService.execute(_id);

    return res.status(200).send();

  }

  public async update(req:Request,res:Response):Promise<Response>{
    const _id = req.params.id;
    let data = req.body;

    const user = await UpdateUserService.execute(_id,{...data})

    return res.json({user:user.display()})
  }

  //test List
  public async index(_:Request, res:Response):Promise<Response>{

    const user = await ListUserService.execute();

    return res.json(user);
  }

}


export default new UserController;