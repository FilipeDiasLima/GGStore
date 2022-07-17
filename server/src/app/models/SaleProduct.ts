
import Sequelize, { Model } from 'sequelize';

import database from '../../database'
import Product from './Product';
import User from './User';

class SaleProduct extends Model {
  declare id: number;
  declare product_id: number;
  declare key: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

SaleProduct.init(
  {
    key: Sequelize.STRING
  },
  {
    sequelize: database.connection,
  }
);

SaleProduct.belongsTo(User, { foreignKey: 'user_id', as: 'user' })
SaleProduct.belongsTo(Product, { foreignKey: 'product_id', as: 'product' })

export default SaleProduct;