import User from "../models/User"
import AppError from '../../erros/AppError'
import { Request } from "express"
import { deleteFile } from '../../utils/file'
interface UserProps {
  name: string
  email: string
  password: string
  provider: boolean
  avatar: string
}

interface UpdateUserProps {
  name: string
  oldPassword: string
  password: string
  userId: string;
  avatarFilename: string;
}

class UserService {
  public async create({ name, email, password, provider, avatar }: UserProps) {
    const userExists = await User.findOne({
      where: { email }
    })

    if (userExists) {
      throw new AppError('Email address already used.', 400)
    }

    const user = await User.create({ name, email, password, provider, avatar })

    return user
  }

  public async get(request: Request) {
    const user = await User.findOne({
      where: { id: request.user.id },
      attributes: ['id', 'name', 'provider', 'email', 'avatar'],
      raw: true
    })

    const serializedUser = {
      ...user,
      avatar_url: `http://localhost:3333/tmp/avatar/${user.avatar}`
    }

    return serializedUser
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
      await deleteFile(`./tmp/avatar/${user.avatar}`)
    }

    user.name = name || user.name
    user.password = password || user.password
    user.avatar = avatarFilename || user.avatar

    const response = await user.update({
      name: user.name,
      password: user.password,
      avatar: user.avatar
    })

    return response
  }
}

export default new UserService
