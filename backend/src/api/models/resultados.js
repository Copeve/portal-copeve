/*'use strict';
import {sequelize} from 'sequelize';
const {
    Model
} = sequelize;
*/
'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Resultados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
        }
    }
    Resultados.init({
        descricao: DataTypes.STRING,
        numero: DataTypes.FLOAT,
        destaque: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Resultados',
    });
    return Resultados;
};