'use strict';
import {
    Model
} from 'sequelize';

interface NoticiasAttributes{
  titulo:string, 
  corpo:string, 
  data_postagem:Date, 
  data_atualizacao: Date, 
  destaque:boolean
}

module.exports = (sequelize:any, DataTypes:any) => {
    class Noticias extends Model <NoticiasAttributes> implements NoticiasAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */ 
        titulo!:string; 
        corpo!:string; 
        data_postagem!:Date; 
        data_atualizacao!: Date; 
        destaque!:boolean;
        static associate(models:any) {
            Noticias.belongsTo(models.Concursos, {
                foreignKey: 'concurso'
            });
            Noticias.belongsTo(models.Arquivos_concursos, {
                foreignKey: 'imagem'
            });
            // define association here
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