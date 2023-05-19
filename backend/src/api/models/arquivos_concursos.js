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
    class Arquivos_concursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            Arquivos_concursos.hasOne(models.Concursos, {foreignKey: 'concurso'});
            Arquivos_concursos.hasOne(models.Tipos_arquivos, {foreignKey: 'tipos_arquivo;'});
        }
    }
    Arquivos_concursos.init({
        titulo: DataTypes.STRING,
        link: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Arquivos_concursos',
    });
    return Arquivos_concursos;
};