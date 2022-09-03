import { IUser } from '@modules/users/models/IUser';
import AppError from 'src/shared/errors/AppError';
import UserSchema from '@src/modules/users/infra/mongoose/schema/UserSchema';

class CreateUserService {
  public async execute({ ...data }: IUser): Promise<IUser> {
    const existUser = await UserSchema.findOne({ email: data.email });

    if (existUser) {
      throw new AppError('User is already registered.');
    }

    const user = (await UserSchema.create({ ...data })) as IUser;

    return user;
  }
}

export default new CreateUserService();
