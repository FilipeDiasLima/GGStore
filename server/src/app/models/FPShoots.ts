import { Model } from 'sequelize';

import database from '../../database'
import Product from './Product';

class FPShoots extends Model {
  declare id: number;
  declare product_id: number;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

FPShoots.init(
  {
  },
  {
    sequelize: database.connection,
  }
);

FPShoots.belongsTo(Product, { foreignKey: 'product_id', as: 'product' })

export default FPShoots;