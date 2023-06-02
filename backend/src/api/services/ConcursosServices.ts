import Services from   './Services';
import database from '../models/index';

export default class ConcursosServices extends Services{
    constructor(){
        super('Concursos', ['Grupos_concursos']);
    }

    
}