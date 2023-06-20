'use strict';
import {
    Model
}from 'sequelize';

interface TiposUsuariosAttributes {
  descricao:string, 
}

module.exports = (sequelize:any, DataTypes:any) => {
    class Tipos_usuarios extends Model<TiposUsuariosAttributes> implements TiposUsuariosAttributes {
        descricao!: string;
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models:any) {
            // define association here
            Tipos_usuarios.hasOne(models.Usuarios,{
                foreignKey: 'tipo_usuario'
            });
        }
    }
    Tipos_usuarios.init({
        descricao: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Tipos_usuarios',
    });
    return Tipos_usuarios;
};