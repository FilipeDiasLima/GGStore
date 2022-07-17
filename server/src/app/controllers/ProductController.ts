import { Request, Response } from "express"
import ProductService from "../services/ProductService"

class ProductController {
  async create(request: Request, response: Response) {
    try {
      const userId = request.user.id

      request.body.user_id = userId

      const productService = await ProductService.create(request.body)

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