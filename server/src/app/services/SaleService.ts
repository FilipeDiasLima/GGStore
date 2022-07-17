import { generationKey } from "../../utils/generationKey";
import SaleProduct from "../models/SaleProduct";

interface SaleProps {
  userId: number
  productId: number
  amount: number
}

class SaleController {
  public async create(saleRequest: SaleProps) {
    for (let i = 0; i < saleRequest.amount; i++) {
      const key = generationKey()

      await SaleProduct.create({
        user_id: saleRequest.userId,
        product_id: saleRequest.productId,
        key: key
      })
    }
    return true
  }
  public async indexKey(userId: number, productId: Number) {

    const products = await SaleProduct.findAll({
      where: { user_id: userId, product_id: productId },
      attributes: ['product_id', 'key']
    })

    return products
  }
}

export default new SaleController