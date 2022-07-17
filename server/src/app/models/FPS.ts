import { Model } from 'sequelize';

import database from '../../database'
import Product from './Product';

class FPS extends Model {
  declare id: number;
  declare product_id: number;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

FPS.init(
  {
  },
  {
    sequelize: database.connection,
  }
);

FPS.belongsTo(Product, { foreignKey: 'product_id', as: 'product' })

export default FPS;