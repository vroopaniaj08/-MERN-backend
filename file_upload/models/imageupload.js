'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imageUpload extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  imageUpload.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'imageUpload',
  });
  return imageUpload;
};