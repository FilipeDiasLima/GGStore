import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email, password, provider } = request.body

    const userService = await UserService.create({ name, email, password, provider })

    return response.json(userService)
  }
}

export default new UserController