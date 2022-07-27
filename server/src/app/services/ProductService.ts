import Product from "../models/Product"
import AppError from '../../erros/AppError'
import User from "../models/User"
import { Request } from "express"
import { Op } from "sequelize"
import Action from "../models/Action"
import Adventure from "../models/Adventure"
import RPG from "../models/RPG"
import Racing from "../models/Racing"
import FPS from "../models/FPShoots"
import Indy from "../models/Indy"

interface ProductProps {
  user_id: number
  name: string
  price: number
  image_poster: string
  image_cover: string
  plataform: string
  studio: string
  release: string
  categories: [category: string]
}

class ProductService {
  public async create(productRequest: ProductProps) {
    const user = await User.findByPk(productRequest.user_id)
    console.log({ productRequest })

    if (!user.provider) {
      throw new AppError('Only provider users can register products.', 401);
    }

    const productExists = await Product.findOne({
      where: { name: productRequest.name.toLocaleLowerCase(), studio: productRequest.studio.toLocaleLowerCase() }
    })

    if (productExists) {
      throw new AppError('Product already registed.',)
    }

    const product = await Product.create({
      user_id: Number(productRequest.user_id),
      name: productRequest.name.toLocaleLowerCase(),
      price: Number(productRequest.price),
      image_poster: productRequest.image_poster,
      image_cover: productRequest.image_cover,
      plataform: productRequest.plataform.toLocaleLowerCase(),
      studio: productRequest.studio.toLocaleLowerCase(),
      release: productRequest.release,
    })

    productRequest.categories.map(async category => {
      if (category.toLocaleLowerCase() === 'action') {
        await Action.create({ product_id: product.id })
      }
      if (category.toLocaleLowerCase() === 'adventure') {
        await Adventure.create({ product_id: product.id })
      }
      if (category.toLocaleLowerCase() === 'rpg') {
        await RPG.create({ product_id: product.id })
      }
      if (category.toLocaleLowerCase() === 'racing') {
        await Racing.create({ product_id: product.id })
      }
      if (category.toLocaleLowerCase() === 'fps') {
        await FPS.create({ product_id: product.id })
      }
      if (category.toLocaleLowerCase() === 'indy') {
        await Indy.create({ product_id: product.id })
      }
    })

    return product
  }

  public async index(request: Request) {
    const {
      page = 1,
      name,
      priceFrom,
      priceTo,
      action,
      adventure,
      rpg,
      fps,
      indy,
      racing
    } = request.query

    const { id } = request.params

    if (id) {
      const product = await Product.findOne({
        where: { id: Number(id) },
        raw: true
      })

      const serializedProduct = {
        ...product,
        poster_url: `http://localhost:3333/tmp/product/${product.image_poster}`,
        cover_url: `http://localhost:3333/tmp/product/${product.image_cover}`,
      }

      return serializedProduct

    }
    if (action || adventure || rpg || fps || indy || racing) {
      let productsArr = []
      if (action) {
        const productsId = await Action.findAll({
          attributes: ['product_id']
        })
        productsId.map(item => {
          productsArr.push(item.product_id)
        })
      }
      if (adventure) {
        const productsId = await Adventure.findAll({
          attributes: ['product_id']
        })
        productsId.map(item => {
          productsArr.push(item.product_id)
        })
      }
      if (rpg) {
        const productsId = await RPG.findAll({
          attributes: ['product_id']
        })
        productsId.map(item => {
          productsArr.push(item.product_id)
        })
      }
      if (fps) {
        const productsId = await FPS.findAll({
          attributes: ['product_id']
        })
        productsId.map(item => {
          productsArr.push(item.product_id)
        })
      }
      if (indy) {
        const productsId = await Indy.findAll({
          attributes: ['product_id']
        })
        productsId.map(item => {
          productsArr.push(item.product_id)
        })
      }
      if (racing) {
        const productsId = await Racing.findAll({
          attributes: ['product_id']
        })
        productsId.map(item => {
          productsArr.push(item.product_id)
        })
      }

      const products = await Product.findAll({
        where: {
          id: productsArr
        },
        raw: true
      })

      const serializedProduct = products.map(product => {
        return {
          ...product,
          poster_url: `http://localhost:3333/tmp/product/${product.image_poster}`,
          cover_url: `http://localhost:3333/tmp/product/${product.image_cover}`,
        }
      })

      return serializedProduct
    } else {
      let whereCondition = {}
      if (name) {
        whereCondition['name'] = { [Op.like]: `%${String(name).toLocaleLowerCase()}%` }
      }

      if (priceFrom && priceTo) {
        whereCondition['price'] = { [Op.between]: [priceFrom, priceTo] }
      }

      const products = await Product.findAll({
        where: whereCondition,
        order: [
          ['name', 'asc']
        ],
        limit: 10,
        offset: (Number(page) - 1) * 10,
        raw: true
      })

      const serializedProduct = products.map(product => {
        return {
          ...product,
          poster_url: `http://localhost:3333/tmp/product/${product.image_poster}`,
          cover_url: `http://localhost:3333/tmp/product/${product.image_cover}`,
        }
      })

      return serializedProduct
    }
  }
}

export default new ProductService