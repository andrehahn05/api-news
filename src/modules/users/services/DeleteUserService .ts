import { IUser } from '@modules/users/models/IUser';
import AppError from 'src/shared/errors/AppError';
import UserSchema from '@src/modules/users/infra/mongoose/schema/UserSchema';

class DeleteUserService {
  public async execute(_id: string): Promise<void> {
    if (!_id) {
      throw new AppError('Required id');
    }

    const user: IUser | any = await UserSchema.findById(_id);

    if (!user) {
      throw new AppError('User not found');
    }
    await user.remove();
  }
}

export default new DeleteUserService();
