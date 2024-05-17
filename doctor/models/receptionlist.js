'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receptionlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Receptionlist.belongsTo(models.User,{foreignKey:"user_id",as:"user_info"})
      Receptionlist.belongsTo(models.Doctor,{foreignKey:"doctor_id",as:"doctor_info"})
    }
  }
  Receptionlist.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Receptionlist',
  });
  return Receptionlist;
};