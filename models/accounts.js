'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.account_types, {
        foreignKey: 'type'
      });
      this.belongsTo(models.Clients, {
        foreignKey: 'client_id'
      });
      this.hasMany(models.transactions, {
        foreignKey: 'account_ori'
      });
      this.hasMany(models.transactions, {
        foreignKey: 'account_des'
      });
    }
  };
  Accounts.init({
    account_no: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    balance: DataTypes.DECIMAL,
    type: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Accounts',
    underscored: true,
  });
  return Accounts;
};