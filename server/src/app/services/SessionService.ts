import User from '../models/User'
import AppError from '../../erros/AppError'
import { sign } from 'jsonwebtoken';
import auth from '../../config/auth';

interface Request {
  email: string
  password: string
}

interface Response {
  user: User;
  token: string;
}

class SessionService {
  public async create({ email, password }: Request): Promise<Response> {
    const user = await User.findOne({
      where: { email }
    })

    if (!user) throw new AppError('User not found', 401)

    if (!(await user.checkPassword(password))) {
      throw new AppError('Incorret Email/Password combination.', 401)
    }

    const token = sign({}, auth.secret, {
      expiresIn: auth.expiresIn
    })

    return ({
      user,
      token
    })
  }
}

export default new SessionService