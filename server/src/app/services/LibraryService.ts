import Action from "../models/Action"
import Adventure from "../models/Adventure"
import FPS from "../models/FPShoots"
import Indy from "../models/Indy"
import Product from "../models/Product"
import Racing from "../models/Racing"
import RPG from "../models/RPG"
import SaleProduct from "../models/SaleProduct"

class LibraryService {
  public async index(userId: number) {

    const products = await SaleProduct.findAll({
      where: { user_id: userId },
      attributes: ['product_id'],
      include: [
        {
          model: Product,
          as: 'product',
        }
      ],
    })

    const unique = [...new Map(products.map((item, key) => [item[key], item])).values()]

    const serializedProduct = unique.map((product: any) => {
      product = product.dataValues
      return {
        ...product,
        poster_url: `http://localhost:3333/tmp/product/${product.product.image_poster}`,
        cover_url: `http://localhost:3333/tmp/product/${product.product.image_cover}`,
      }
    })

    return serializedProduct
  }

  public async indexGenders(productId: number) {
    let genders = []
    const action = await Action.findOne({
      where: { product_id: productId }
    })
    if (action) genders.push('action')

    const adventure = await Adventure.findOne({
      where: { product_id: productId }
    })
    if (adventure) genders.push('adventure')

    const rpg = await RPG.findOne({
      where: { product_id: productId }
    })
    if (rpg) genders.push('rpg')

    const racing = await Racing.findOne({
      where: { product_id: productId }
    })
    if (racing) genders.push('racing')

    const indy = await Indy.findOne({
      where: { product_id: productId }
    })
    if (indy) genders.push('indy')

    const fps = await FPS.findOne({
      where: { product_id: productId }
    })
    if (fps) genders.push('fps')

    return genders
  }
}

export default new LibraryService