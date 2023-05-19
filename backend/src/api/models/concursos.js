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
    class Concursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            Concursos.belongsTo(models.Eventos_concursos, {
                foreignKey: 'concurso'
            });
            Concursos.belongsTo(models.Noticias, {
                foreignKey: 'concurso'
            });
            Concursos.belongsTo(models.Arquivos_concursos, {
                foreignKey: 'concurso'
            });
        }
    }
    Concursos.init({
        nome: DataTypes.STRING,
        ano: DataTypes.INTEGER,
        data_inicio: DataTypes.DATE,
        data_fim: DataTypes.DATE,
        encerrado: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Concursos',
    });
    return Concursos;
};