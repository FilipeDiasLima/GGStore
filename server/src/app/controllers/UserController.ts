import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  async create(request: Request, response: Response) {
    try {
      const { name, email, password, provider } = request.body

      const providerParse = JSON.parse(provider)

      const userService = await UserService.create({
        name,
        email,
        password,
        provider: providerParse,
        avatar: request.file.filename
      })

      return response.status(201).json({
        name: userService.name,
        email: userService.email,
      })

    } catch (error) {
      return response.status(400).json({ error })
    }
  }

  async get(request: Request, response: Response) {
    try {
      const userService = await UserService.get(request)

      return response.status(201).json(userService)
    } catch (error) {
      return response.status(400).json({ error })
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { name, oldPassword, password } = request.body
      const avatarFilename = request.file?.filename
      const userId = request.user.id

      const userService = await UserService.update({ name, oldPassword, password, userId, avatarFilename })

      const userFormated = {
        name: userService.name,
        avatar: userService.avatar,
      }

      return response.status(201).json({
        user: userFormated
      })
    } catch (error) {
      return response.status(400).json({ error })
    }
  }
}

export default new UserController