import { Request, Response } from "express";
import SessionService from "../services/SessionService";

class SessionController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body

    const authService = await SessionService.create({ email, password })

    return response.json(authService)
  }
}

export default new SessionController