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
    class Noticias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            Noticias.hasOne(models.Concursos, {foreignKey: 'concurso'});
        }
    }
    Noticias.init({
        titulo: DataTypes.STRING,
        corpo: DataTypes.STRING,
        data_postagem: DataTypes.DATE,
        data_atualizacao: DataTypes.DATE,
        destaque: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Noticias',
    });
    return Noticias;
};