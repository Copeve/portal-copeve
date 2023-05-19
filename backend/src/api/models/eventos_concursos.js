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
    class Eventos_concursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            Eventos_concursos.hasOne(models.Tipos_eventos, {
                foreignKey: 'tipo_evento'
            });
            Eventos_concursos.hasOne(models.Concursos, {
                foreignKey: 'concurso'
            });
        }
    }
    Eventos_concursos.init({
        titulo: DataTypes.STRING,
        data: DataTypes.DATE,
        evento: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Eventos_concursos',
    });
    return Eventos_concursos;
};