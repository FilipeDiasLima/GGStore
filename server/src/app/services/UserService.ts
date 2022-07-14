import User from "../models/User"
import AppError from '../../erros/AppError'
import { Request } from "express"

interface UserProps {
  name: string
  email: string
  password: string
  provider: boolean
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
}

export default new UserService