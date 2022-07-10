interface Request {
  name: string
  email: string
  password: string
}

class UserService {
  public async create({ name, email, password }: Request) {
    return {
      name, email, password
    }
  }
}

export default new UserService