'use strict';
import {
    Model
} from 'sequelize';

interface ResultadosAttributes {
    descricao: string, 
    destaque:boolean,
    numero: number 
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Resultados extends Model<ResultadosAttributes> implements ResultadosAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        descricao!: string;
        destaque!: boolean;
        numero!: number;

        static associate(models:any) {
            // define association here
        }
    }
    Resultados.init({
        destaque: DataTypes.BOOLEAN, 
        descricao: DataTypes.STRING, 
        numero: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Resultados',
    });
    return Resultados;
};