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
    adicionaArquivo(dados:object){
        return arquivosServices.adicionaRegistro(dados);
    }


    deletaEvento(idEvento:string){
        return eventosServices.deletaRegistro(idEvento);
    }
    deletaNoticia(idNoticia:string){
        return noticiasServices.deletaRegistro(idNoticia);
    }
    deletaArquivo(idArquivo:string){
        return arquivosServices.deletaRegistro(idArquivo);
    }


    async deltaConcursoEDpendencias(id:string){
        const eventosDoConcurso = await eventosServices.pegaRegistrosComCondicao({concurso:Number(id)});
        const noticiasDoConcurso = await noticiasServices.pegaRegistrosComCondicao({concurso: Number(id)});
        const arquivosDoConcurso = await arquivosServices.pegaRegistrosComCondicao({concurso: Number(id)});

        eventosDoConcurso.forEach((evento:any)=>{
            this.deletaEvento(evento.id);
        });
        noticiasDoConcurso.forEach((noticia:any)=>{
            this.deletaNoticia(noticia.id);
        });
        arquivosDoConcurso.forEach((arquivo:any)=>{
            this.deletaArquivo(arquivo.id);
        });

        this.deletaRegistro(id);
    }
}