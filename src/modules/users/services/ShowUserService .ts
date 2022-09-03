import { IUser } from '@modules/users/models/IUser';
import AppError from 'src/shared/errors/AppError';
import UserSchema from '@src/modules/users/infra/mongoose/schema/UserSchema';

class ShowUserService {
  public async execute(_id: string): Promise<IUser> {
    if (!_id) {
      throw new AppError('Required id');
    }

    const user = await UserSchema.findById(_id) as IUser;

    if (!user) {
      throw new AppError('User not found');
    }
    return user;
  }
}

export default new ShowUserService();
