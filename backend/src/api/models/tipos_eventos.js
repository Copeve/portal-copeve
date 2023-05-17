'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Tipos_eventos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
        }
    }
    Tipos_eventos.init({
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Tipos_eventos',
    });
    return Tipos_eventos;
};