'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.belongsTo(models.Department,{foreignKey:"department_id",as:"dept_info"})
    }
  }
  Employee.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:"value can not be null"},
        notEmpty:{msg:"no value can be empty"}
      }
    },
    age: DataTypes.INTEGER,
    salary: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};