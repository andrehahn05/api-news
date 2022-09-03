import { IUser } from '@modules/users/models/IUser';
import AppError from 'src/shared/errors/AppError';
import UserSchema from '@src/modules/users/infra/mongoose/schema/UserSchema';

//test List
class ListUserService {
  public async execute(): Promise<IUser[]> {
    const listUser: any = await UserSchema.find({});

    if (!listUser) {
      throw new AppError('Error');
    }
    return listUser;
  }
}

export default new ListUserService();
