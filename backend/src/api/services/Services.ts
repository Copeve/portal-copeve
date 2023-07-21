import database from '../models/index';

export default class Services{
    modelo:string;
    dependecias:string[];
    constructor(modelo:string, dependencias:string[]){
        this.modelo=modelo;
        this.dependecias=dependencias;
    }

    async pegaTodosOsRegistros(){
        const includeArray: any[] =[];
        this.dependecias.forEach((dependecia)=>{
            includeArray.push(database[dependecia]);
        });
        console.log(includeArray);
        return database[this.modelo].findAll({include: includeArray});
    }

    async pegaRegistrosComCondicao(where={}){
        
        return database[this.modelo].findAll({where: {...where}});
    }

    async pegaRegistroUnico(where={}){
        return database[this.modelo].findOne({where: {...where}});
    }

    async adicionaRegistro(dados:object){
        return database[this.modelo].create(dados);
    }
    async deletaRegistro(id:string){
        return database[this.modelo].destroy({where:{id:Number(id)}});
    }
    async atualizaRegistro(id:string, dados:object){
        try {
            const resultado = await database[this.modelo].update(dados,{where:{id: Number(id)}});
            
        } catch (error) {
            console.log(error);
        }
    }
}