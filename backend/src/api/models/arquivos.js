'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Arquivos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            Arquivos.hasOne(models.Concursos, {
                foreignKey: 'concurso'
            });
        }
    }
    Arquivos.init({
        nome: DataTypes.STRING,
        extensao: DataTypes.STRING,
        data_criacao: DataTypes.DATE,
        ultimo_acesso: DataTypes.DATE,
        mime_type: DataTypes.STRING,
        sub_pasta: DataTypes.STRING,
        path: DataTypes.STRING,
        privado: DataTypes.BOOLEAN,
        revisado: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Arquivos',
    });
    return Arquivos;
};