import AppError from '@src/shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify, Secret, decode } from 'jsonwebtoken';
import authConfig from '@src/config/auth';

export interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export function authenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token not provided.', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret as Secret);

    const { sub } = decoded as ITokenPayload;
    req.user = {
      id: sub,
    };

    next();
  } catch {
    console.log(token);
    throw new AppError(' Invalid Jwt token');
  }
}
