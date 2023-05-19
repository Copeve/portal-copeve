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
    class Tipos_arquivos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            Tipos_arquivos.belongsTo(models.Arquivos_concursos, {
                foreignKey: 'tipo_arquivo'
            });
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