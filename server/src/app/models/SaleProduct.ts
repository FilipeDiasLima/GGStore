
import Sequelize, { Model } from 'sequelize';

import database from '../../database'
import Product from './Product';
import Sale from './Sale';

class SaleProduct extends Model {
  declare id: number;
  declare sale_id: number;
  declare product_id: number;
  declare amount: number;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

SaleProduct.init(
  {
    amount: Sequelize.INTEGER
  },
  {
    sequelize: database.connection,
  }
);

SaleProduct.belongsTo(Sale, { foreignKey: 'sale_id', as: 'sale' })
SaleProduct.belongsTo(Product, { foreignKey: 'product_id', as: 'product' })

export default SaleProduct;