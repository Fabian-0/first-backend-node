'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.transactions, {
        foreignKey: 'transaction_type',
        as: 'trans_type',
        onDelete: 'CASCADE'
      });
    }
  };
  transaction_types.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaction_types',
    underscored: true,
  });
  return transaction_types;
};