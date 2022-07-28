import Sequelize from "sequelize"
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
    let arr = []
    const sales = await SaleProduct.findAll({
      where: { user_id: userId },
      attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('product_id')), 'product_id'],],
      raw: true
    })

    sales.map(sale => {
      arr.push(sale.product_id)
    })

    const products = await Product.findAll({
      where: { id: arr },
      raw: true
    })

    const serializedProduct = products.map((product: any, index: number) => {
      return {
        ...product,
        poster_url: `http://localhost:3333/tmp/product/${product.image_poster}`,
        cover_url: `http://localhost:3333/tmp/product/${product.image_cover}`,
      }
    })

    return serializedProduct
  }

  public async indexGenders(productId: number) {
    let genders = []
    const action = await Action.findOne({
      where: { product_id: productId }
    })
    if (action) genders.push('ação')

    const adventure = await Adventure.findOne({
      where: { product_id: productId }
    })
    if (adventure) genders.push('aventura')

    const rpg = await RPG.findOne({
      where: { product_id: productId }
    })
    if (rpg) genders.push('rpg')

    const racing = await Racing.findOne({
      where: { product_id: productId }
    })
    if (racing) genders.push('corrida')

    const indy = await Indy.findOne({
      where: { product_id: productId }
    })
    if (indy) genders.push('indie')

    const fps = await FPS.findOne({
      where: { product_id: productId }
    })
    if (fps) genders.push('fps')

    return genders
  }
}

export default new LibraryService