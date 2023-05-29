
'use strict';
import {
    Model
} from 'sequelize';

interface ConcursosAttributes{
  nome: string,
  ano: number,
  data_inicio: Date, 
  data_fim: Date, 
  encerrado: boolean
}

module.exports = (sequelize:any, DataTypes:any) => {
    class Concursos extends Model<ConcursosAttributes> implements ConcursosAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */ 
        nome!: string;
        ano!: number;
        data_inicio!: Date; 
        data_fim!: Date; 
        encerrado!: boolean;

        static associate(models:any) {
            Concursos.hasOne(models.Eventos, {
                foreignKey: 'concurso'
            });
            /*
            Concursos.belongsTo(models.Noticias, {
                foreignKey: 'concurso'
            });
            Concursos.belongsTo(models.Arquivos_concursos, {
                foreignKey: 'concurso'
            });*/
            Concursos.belongsTo(models.Grupos_concursos, {
                foreignKey: 'grupo_concurso'
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