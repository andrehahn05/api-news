import { IUser } from '@modules/users/models/IUser';
import AppError from 'src/shared/errors/AppError';
import UserSchema from '@src/modules/users/infra/mongoose/schema/UserSchema';

class UpdateUserService {
  public async execute(_id: string, { ...data }: IUser): Promise<IUser> {
    if (!_id) {
      throw new AppError('Required id');
    }

    const user = await UserSchema.findByIdAndUpdate(
      _id,
      { ...data },
      { new: true },
    ) as IUser;

    if (!user) {
      throw new AppError('User not found');
    }
    await user.save();
    return user;
  }
}

export default new UpdateUserService();
