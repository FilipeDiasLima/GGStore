import { Model } from 'sequelize';

import database from '../../database'
import Product from './Product';

class Indy extends Model {
  declare id: number;
  declare product_id: number;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Indy.init(
  {
  },
  {
    sequelize: database.connection,
  }
);

Indy.belongsTo(Product, { foreignKey: 'product_id', as: 'product' })

export default Indy;