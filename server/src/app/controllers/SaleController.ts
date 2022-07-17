import { Request, Response } from "express";
import SaleService from "../services/SaleService";

class SaleController {
  async create(request: Request, response: Response) {
    try {
      const { productId, amount } = request.body
      const userId = request.user.id

      const data = {
        userId: Number(userId),
        productId: Number(productId),
        amount: Number(amount)
      }

      const saleService = await SaleService.create(data)

      return response.status(201).json(saleService)
    } catch (error) {
      return response.status(400).json({ error })
    }
  }

  async indexKey(request: Request, response: Response) {
    try {
      const userId = request.user.id
      const { productId } = request.params
      const saleService = await SaleService.indexKey(Number(userId), Number(productId))

      return response.status(201).json(saleService)
    } catch (error) {
      return response.status(400).json({ error })
    }
  }
}

export default new SaleController