import User from "../models/User"
import AppError from '../../erros/AppError'
import { Request } from "express"
import path from 'path';
import uploadConfig from "../../config/upload";
import fs from 'fs';

interface UserProps {
  name: string
  email: string
  password: string
  provider: boolean
}

interface UpdateUserProps {
  name: string
  oldPassword: string
  password: string
  userId: string;
  avatarFilename: string;
}

class UserService {
  public async create({ name, email, password, provider }: UserProps) {
    const userExists = await User.findOne({
      where: { email }
    })

    if (userExists) {
      throw new AppError('Email address already used.')
    }

    const user = await User.create({ name, email, password, provider })

    return user
  }

  public async get(request: Request) {
    const { page = 1 } = request.query

    const users = await User.findAll({
      limit: 10,
      offset: (Number(page) - 1) * 10,
    })

    return users
  }

  public async update({ name, oldPassword, password, userId, avatarFilename }: UpdateUserProps) {

    const user = await User.findByPk(userId)

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      throw new AppError('Password does not match', 401);
    }

    if (user.avatar) {
      // Deletar avatar anterior

      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.name = name || user.name
    user.password = password || user.password
    user.avatar = avatarFilename || user.avatar

    const response = await user.update(user)

    return response
  }
}

export default new UserService