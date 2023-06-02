import Services from   './Services';
import EventosServices from './EventosServices';
import ArquivosServices from './ArquivosServices';
import NoticiasServices from './NoticiasServices';
const eventosServices = new EventosServices();
const arquivosServices = new ArquivosServices();
const noticiasServices = new NoticiasServices();

export default class ConcursosServices extends Services{
    constructor(){
        super('Concursos', ['Grupos_concursos']);
    }

    pegaEventos(id:string){
        return eventosServices.pegaRegistrosComCondicao({concurso: id});
    }

    pegaArquivos(id:string){
        return arquivosServices.pegaRegistrosComCondicao({concurso:id});
    }

    pegaNoticias(id:string){
        return noticiasServices.pegaRegistrosComCondicao({concurso:id});
    }

    adicionaEvento(dados:object){
        return eventosServices.adicionaRegistro(dados);
    }
    adicionaNoticia(dados:object){
        return noticiasServices.adicionaRegistro(dados);
    }
}