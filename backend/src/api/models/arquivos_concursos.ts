'use strict';
import {
    Model
} from 'sequelize' ;

interface ArquivosConcursosAttributtes{
  data_criacao:Date,
  data_ultimo_acesso:Date, 
  data_alteracao:Date,
  guid:string, 
  nome:string,
  extensao:string, 
  mime_type:string, 
  path:string, 
  privado: boolean, 
  revisado: boolean
}

module.exports = (sequelize:any, DataTypes:any) => {
    class Arquivos_concursos extends Model<ArquivosConcursosAttributtes> implements ArquivosConcursosAttributtes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        data_criacao!:Date;
        data_ultimo_acesso!:Date; 
        data_alteracao!:Date;
        guid!:string; 
        nome!:string;
        extensao!:string; 
        mime_type!:string; 
        path!:string; 
        privado!: boolean; 
        revisado!: boolean;
        static associate(models:any) {
            // define association here
            Arquivos_concursos.belongsTo(models.Concursos, {
                foreignKey: 'concurso'
            });
            Arquivos_concursos.belongsTo(models.Tipos_arquivos, {
                foreignKey: 'tipo_arquivo'
            });
        }
    }
    Arquivos_concursos.init({
        data_criacao:DataTypes.DATE,
        data_ultimo_acesso:DataTypes.DATE, 
        data_alteracao:DataTypes.DATE,
        guid:DataTypes.STRING, 
        nome:DataTypes.STRING,
        extensao:DataTypes.STRING, 
        mime_type:DataTypes.STRING, 
        path:DataTypes.STRING, 
        privado: DataTypes.BOOLEAN, 
        revisado: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Arquivos_concursos',
    });
    return Arquivos_concursos;
};