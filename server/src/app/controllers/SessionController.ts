import { Request, Response } from "express";
import SessionService from "../services/SessionService";

class SessionController {
  async create(request: Request, response: Response) {
    try {
      const { email, password } = request.body

      const { user, token } = await SessionService.create({ email, password })

      const userFormated = {
        id: user.id,
        name: user.name,
        email: user.email,
        provider: user.provider,
        avatar: user.avatar,
      }

      return response.status(201).json({
        userFormated,
        token
      })
    } catch (error) {
      return response.status(400).json({ error })
    }
  }
}

export default new SessionController