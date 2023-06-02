import Services from   './Services';
import EventosServices from './EventosServices';
const eventosServices = new EventosServices();
import database from '../models/index';

export default class ConcursosServices extends Services{
    constructor(){
        super('Concursos', ['Grupos_concursos']);
    }

    pegaEventos(id:string){
        return eventosServices.pegaRegistrosComCondicao({concurso: id});
    }
}