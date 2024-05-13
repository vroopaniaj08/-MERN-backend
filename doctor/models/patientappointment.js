'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientAppointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PatientAppointment.belongsTo(models.Docter,{foreignKey:"doctor_id",as:"doctor_info"})
      PatientAppointment.belongsTo(models.Patient,{foreignKey:"patient_id",as:"patient_info"})
    }
  }
  PatientAppointment.init({
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PatientAppointment',
  });
  return PatientAppointment;
};