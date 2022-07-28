import { Model } from 'sequelize';

import database from '../../database'
import Product from './Product';

class RPG extends Model {
  declare id: number;
  declare product_id: number;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

RPG.init(
  {
  },
  {
    sequelize: database.connection,
  }
);

RPG.belongsTo(Product, { foreignKey: 'product_id', as: 'product', onDelete: 'CASCADE' })

export default RPG;