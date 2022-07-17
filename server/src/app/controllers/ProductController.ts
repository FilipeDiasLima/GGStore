import { Request, Response } from "express"
import ProductService from "../services/ProductService"

class ProductController {
  async create(request: Request, response: Response) {
    try {
      const userId = request.user.id

      const data = {
        user_id: userId,
        ...request.body,
        image_poster: request.files[0].filename,
        image_cover: request.files[1].filename,
      }

      const productService = await ProductService.create(data)

      return response.status(201).json(productService)
    } catch (error) {
      return response.status(400).json({ error })
    }
  }

  async index(request: Request, response: Response) {
    try {
      const userService = await ProductService.index(request)

      return response.status(201).json(userService)
    } catch (error) {
      return response.status(400).json({ error })
    }
  }
}

export default new ProductController