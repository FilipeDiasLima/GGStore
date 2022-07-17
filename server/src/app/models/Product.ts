
import Sequelize, { Model } from 'sequelize';

import database from '../../database'
import User from './User';

class Product extends Model {
  declare id: number;
  declare user_id: number;
  declare name: string;
  declare price: number;
  declare image_poster: string;
  declare image_cover: string;
  declare plataform: string;
  declare studio: string;
  declare release: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Product.init(
  {
    name: Sequelize.STRING,
    price: Sequelize.FLOAT,
    image_poster: Sequelize.STRING,
    image_cover: Sequelize.STRING,
    plataform: Sequelize.STRING,
    studio: Sequelize.STRING,
    release: Sequelize.STRING,
  },
  {
    sequelize: database.connection,
  }
);

Product.belongsTo(User, { foreignKey: 'user_id', as: 'user' })

export default Product;