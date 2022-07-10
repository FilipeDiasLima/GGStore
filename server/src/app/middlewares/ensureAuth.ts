import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken'
import authConfig from '../../config/auth'

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuth(request: Request, response: Response, next: NextFunction): void {

  // Validação do token JWT
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new console.error('JWT token is missing')
  }

  const { secret } = authConfig

  // Bearer token

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, secret)

    const { sub } = decoded as TokenPayload

    request.user = {
      id: sub
    }

    return next()

  } catch (error) {
    throw new error
  }

}