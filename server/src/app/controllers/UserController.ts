import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  async create(request: Request, response: Response) {
    try {
      const { name, email, password, provider } = request.body

      const userService = await UserService.create({ name, email, password, provider })

      return response.status(201).json({
        name: userService.name,
        email: userService.email,
      })

    } catch (error) {
      return response.status(400).json({ error })
    }
  }

  async index(request: Request, response: Response) {
    try {
      const userService = await UserService.get(request)

      return response.status(201).json(userService)
    } catch (error) {
      return response.status(400).json({ error })
    }
  }
}

export default new UserController