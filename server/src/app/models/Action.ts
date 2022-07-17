import { Model } from 'sequelize';

import database from '../../database'
import Product from './Product';

class Action extends Model {
  declare id: number;
  declare product_id: number;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Action.init(
  {
  },
  {
    sequelize: database.connection,
  }
);

Action.belongsTo(Product, { foreignKey: 'product_id', as: 'product' })

export default Action;