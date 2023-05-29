'use strict';
import {
    Model
} from 'sequelize';

interface GruposConcursosAttributes{
  nome: string
}

module.exports = (sequelize:any, DataTypes:any) => {
    class Grupos_concursos extends Model<GruposConcursosAttributes> implements GruposConcursosAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        nome!: string;
        static associate(models:any) {
            // define association here
            Grupos_concursos.hasOne(models.Concursos,  {
                foreignKey: 'grupo_concurso'
            });
        }
    }
    Grupos_concursos.init({
        nome: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Grupos_concursos',
    });
    return Grupos_concursos;
};