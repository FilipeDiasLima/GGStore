import { Model } from 'sequelize';

import database from '../../database'
import Product from './Product';

class Adventure extends Model {
  declare id: number;
  declare product_id: number;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Adventure.init(
  {
  },
  {
    sequelize: database.connection,
  }
);

Adventure.belongsTo(Product, { foreignKey: 'product_id', as: 'product', onDelete: 'CASCADE' })

export default Adventure;