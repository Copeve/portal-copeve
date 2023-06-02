import { Request, Response } from 'express';

import {  ConcursosServices } from '../services';
const concursosServices = new ConcursosServices();
import {  EventosServices } from '../services';
const eventosServices = new EventosServices();
import {NoticiasServices} from '../services';
const noticiasServices= new NoticiasServices();


class ConcursoController {
    static async pegaTodosOsConcursos(req: Request, res: Response): Promise<void> {
        try {
            const todosOsConcursos: object[] = await noticiasServices.pegaTodosOsRegistros();
            res.status(200).json(todosOsConcursos);
        } catch (error) {
            
            res.status(500).json(error);
        }
    }
    static async pegaConcursosAbertos(req: Request, res: Response): Promise<void>{
        try {
            const concursosAbertos:object[] = await concursosServices.pegaRegistrosComCondicao({encerrado:false});
            res.status(200).json(concursosAbertos);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    
    static async pegaConcursosFechados(req: Request, res: Response): Promise<void>{
        try {
            const concursosAbertos:object[] = await concursosServices.pegaRegistrosComCondicao({encerrado:true});
            res.status(200).json(concursosAbertos);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async PegaConcursoPorId(req: Request, res: Response): Promise<void>{
        const {idConcurso} = req.params;
        const concurso:object = await concursosServices.pegaRegistroUnico({id: idConcurso});
        try {
            res.status(200).json(concurso);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async PegaEventosPorId(req: Request, res: Response): Promise<void>{
        const {idConcurso} = req.params;

        const eventos = await concursosServices.pegaEventos(idConcurso);
        try {
            res.status(200).json(eventos);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async pegaArquivosPorId(req: Request, res: Response): Promise<void>{
        const {idConcurso} = req.params;
        const arquivos = await concursosServices.pegaArquivos(idConcurso);
        try {
            res.status(200).json(arquivos);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async pegaNoticiasPorId(req: Request, res: Response): Promise<void>{
        const {idConcurso} = req.params;
        const arquivos = await concursosServices.pegaNoticias(idConcurso);
        try {
            res.status(200).json(arquivos);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async adicionaConcurso(req: Request, res: Response): Promise<void>{
        try {
            const dados = req.body;
            concursosServices.adicionaRegistro(dados);
            console.log(req.body);
            const todosOsConcursos: object[] = await concursosServices.pegaTodosOsRegistros();
            res.status(200).json(todosOsConcursos);
        } catch (error) {
            
            res.status(500).json(error);
        }
    }
    static async adicionaEventoEmConcurso(req: Request, res: Response): Promise<void>{
        try {
            const dados = req.body;
            concursosServices.adicionaEvento(dados);
            console.log(req.body);
            res.status(200).json(req.body);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    static async adicionaNoticiaEmConcurso(req: Request, res: Response): Promise<void>{
        try {
            const dados = req.body;
            concursosServices.adicionaNoticia(dados);
            console.log(req.body);
            res.status(200).json(req.body);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export { ConcursoController };
