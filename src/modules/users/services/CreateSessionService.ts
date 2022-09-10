import { ITokenPayload } from './../../../shared/infra/http/middleware/authenticated';
import authConfig from '@src/config/auth';

import { IUserAuthenticated } from '@modules/users/models/IUserAuthenticated';
import UserSchema from '../infra/mongoose/schema/UserSchema';
import AppError from '@src/shared/errors/AppError';
import bcrypt from 'bcryptjs';
import { Secret, sign } from 'jsonwebtoken';
import { ICreateSession } from '../models/ICreateSession';

class CreateSessionService {
  public async execute({
    email,
    password,
  }: ICreateSession): Promise<IUserAuthenticated> {
    const user = await UserSchema.findOne({
      email: email,
    });
    console.log(user);
    if (!user) {
      throw new AppError('Incorrect email/password !', 401);
    }

    const passwordValid = (await bcrypt.compare(
      password,
      user.password,
    )) as unknown as ICreateSession;

    if (!passwordValid) {
      throw new AppError('Incorrect email/password !', 401);
    }

    const token = sign({}, authConfig.jwt.secret as Secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { user, token } as IUserAuthenticated;
  }
}

export default new CreateSessionService();
