
import Sequelize, { Model } from 'sequelize';

import database from '../../database'
import User from './User';

class Sale extends Model {
  declare id: number;
  declare user_id: number;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Sale.init(
  {
  },
  {
    sequelize: database.connection,
  }
);

Sale.belongsTo(User, { foreignKey: 'user_id', as: 'user' })

export default Sale;