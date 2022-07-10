interface Request {
  email: string
  password: string
}

class SessionService {
  public async create({ email, password }: Request) {

  }
}

export default new SessionService