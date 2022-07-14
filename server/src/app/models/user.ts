
import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

import database from '../../database'

class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare password_hash: string;
  declare provider: boolean;
  declare avatar: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;

  public async checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password_hash);
  }
}

User.init(
  {
    name: Sequelize.STRING,
    provider: Sequelize.BOOLEAN,
    email: Sequelize.STRING,
    password: Sequelize.VIRTUAL,
    password_hash: Sequelize.STRING,
    avatar: Sequelize.STRING,
  },
  {
    sequelize: database.connection,
  }
);

User.addHook('beforeSave', async (user: User): Promise<void> => {
  if (user.password) {
    user.password_hash = await bcrypt.hash(user.password, 8);
  }
})

export default User;