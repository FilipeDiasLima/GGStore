import { Model } from 'sequelize';

import database from '../../database'
import Product from './Product';

class Racing extends Model {
  declare id: number;
  declare product_id: number;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Racing.init(
  {
  },
  {
    sequelize: database.connection,
  }
);

Racing.belongsTo(Product, { foreignKey: 'product_id', as: 'product' })

export default Racing;