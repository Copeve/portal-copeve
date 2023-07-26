
'use strict';
import {
    Model
} from 'sequelize';

interface EventosAttributes{
  evento:string, 
  data: Date, 
  link_evento:string,
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Eventos extends Model<EventosAttributes> implements EventosAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        evento!:string; 
        data!: Date; 
        link_evento!: string;
        static associate(models:any) {
            Eventos.belongsTo(models.Tipos_eventos, {
                foreignKey: 'tipo_evento'
            });
            Eventos.belongsTo(models.Concursos, {
                foreignKey: 'concurso'
            });
        }
    }
    Eventos.init({
        data: DataTypes.DATE,
        evento: DataTypes.STRING, 
        link_evento: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Eventos',
    });
    return Eventos;
};
