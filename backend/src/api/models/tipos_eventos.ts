'use strict';
import {
    Model
}from 'sequelize';

interface TiposEventosAttributes {
  nome: string, 
  descricao:string, 
}

module.exports = (sequelize:any, DataTypes:any) => {
    class Tipos_eventos extends Model<TiposEventosAttributes> implements TiposEventosAttributes {
        nome!:string;
        descricao!: string;
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models:any) {
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