'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Arquivos_concursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Arquivos_concursos.init({
    link_arquivo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Arquivos_concursos',
  });
  return Arquivos_concursos;
};