'use strict';
import { Model } from 'sequelize'
import bcrypt from 'bcryptjs'

export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    provider: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    password_hash: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.addHook('beforeSave', async (user: any) => {
    if (user.password) {
      user.password_hash = await bcrypt.hash(user.password, 8);
    }
  })

  function checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
  return User;
};