'use strict';
import {
    Model
}from 'sequelize';

interface UsuariosAttributes {
  nome:string,
  login:string,
  senha:string 
}

module.exports = (sequelize:any, DataTypes:any) => {
    class Usuarios extends Model<UsuariosAttributes> implements UsuariosAttributes {
        nome!:string;
        login!:string;
        senha!:string;
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models:any) {
            Usuarios.belongsTo(models.Tipos_usuarios, {
                foreignKey: 'tipo_usuario'
            });
        }
    }
    Usuarios.init({
        nome: DataTypes.STRING, 
        login: DataTypes.STRING, 
        senha: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Usuarios',
    });
    return Usuarios;
};