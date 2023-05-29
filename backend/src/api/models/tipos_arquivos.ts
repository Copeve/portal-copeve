'use strict';
import {
    Model
} from 'sequelize';

interface TiposArquivosAttributes{
  nome:string
}

module.exports = (sequelize:any, DataTypes:any) => {
    class Tipos_arquivos extends Model<TiposArquivosAttributes> implements TiposArquivosAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        nome!: string;
        static associate(models:any) {
            // define association here
        }
    }
    Tipos_arquivos.init({
        nome: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Tipos_arquivos',
    });
    return Tipos_arquivos;
};