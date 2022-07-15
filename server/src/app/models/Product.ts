
import Sequelize, { Model } from 'sequelize';

import database from '../../database'
import User from './User';

class Product extends Model {
  declare id: number;
  declare user_id: number;
  declare name: string;
  declare price: number;
  declare imagePoster: string;
  declare imageCover: string;
  declare plataform: string;
  declare gender: string;
  declare studio: string;
  declare amount: number;
  declare release: Date;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Product.init(
  {
    name: Sequelize.STRING,
    price: Sequelize.FLOAT,
    imagePoster: Sequelize.STRING,
    imageCover: Sequelize.STRING,
    plataform: Sequelize.STRING,
    gender: Sequelize.STRING,
    studio: Sequelize.STRING,
    amount: Sequelize.INTEGER,
    release: Sequelize.DATE,
  },
  {
    sequelize: database.connection,
  }
);

Product.belongsTo(User, { foreignKey: 'user_id', as: 'user' })

export default Product;