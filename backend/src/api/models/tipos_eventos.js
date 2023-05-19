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
    class Tipos_eventos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            Tipos_eventos.belongsTo(models.Eventos_concursos, {
                foreignKey: 'tipo_evento'
            });
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