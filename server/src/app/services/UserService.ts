import User from "../models/user"

interface Request {
  name: string
  email: string
  password: string
  provider: boolean
}

class UserService {
  public async create({ name, email, password, provider }: Request) {

    const response = await User.create({ name, email, password, provider })

    return response
  }
}

export default new UserService