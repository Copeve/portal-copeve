import { Request, Response } from 'express';
import {NoticiasServices} from '../services';
const noticiasServices= new NoticiasServices();

class NoticiasController {
    static async pegaTodasAsNoticias(req: Request, res: Response): Promise<void> {
        try {
            const todosOsConcursos: object[] = await noticiasServices.pegaTodosOsRegistros();
            res.status(200).json(todosOsConcursos);
        } catch (error) {
            
            res.status(500).json(error);
        }
    }
    static async pegaNoticiaPorId(req: Request, res: Response):Promise<void> {
        const {idNoticia}=req.params;
        try {
            const noticia = await noticiasServices.pegaRegistroUnico({id: idNoticia});
            res.status(200).json(noticia);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async pegaNoticiasEmDestaque(req: Request, res: Response): Promise<void> {
        try {
            const todosOsConcursos: object[] = await noticiasServices.pegaRegistrosComCondicao({destaque:true});
            res.status(200).json(todosOsConcursos);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async adicionaNoticia(req: Request, res: Response): Promise<void> {
        try {
            const dados= req.body;
            await noticiasServices.adicionaRegistro(dados);
            res.status(200).json(dados);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async adicionaNoticiaDestaque(req: Request, res: Response): Promise<void> {
        try {
            const dados= req.body;
            if(dados.destaque){
                await noticiasServices.adicionaRegistro(dados);
                res.status(200).json(dados);
            }else{
                res.status(500).json({message: 'É necessário que o valor do atributo destaque seja true'});
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async apagaNoticia(req: Request, res: Response): Promise<void> {
        try {
            const {idNoticia} = req.params;
            await noticiasServices.deletaRegistro(idNoticia);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async tiraNoticiaDeDestaque(req: Request, res: Response): Promise<void> {
        try {
            const {idNoticia} = req.params;
            const atualizacao={'destaque':false};
            await noticiasServices.atualizaRegistro(idNoticia, atualizacao);
            res.status(200).json();
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async colocaNoticiaEmDestaque(req: Request, res: Response): Promise<void>{
        try {
            const {idNoticia} = req.params;
            const atualizacao={'destaque':true};
            await noticiasServices.atualizaRegistro(idNoticia, atualizacao);
            res.status(200).json();
        } catch (error) {
            res.status(500).json(error);
        }
    }
}


export { NoticiasController };