import { Request, Response } from 'express';

import {  ConcursosServices } from '../services';
const concursosServices = new ConcursosServices();



class ConcursoController {
    static async pegaTodosOsConcursos(req: Request, res: Response): Promise<void> {
        try {
            const todosOsConcursos: object[] = await concursosServices.pegaTodosOsRegistros();
            res.status(200).json(todosOsConcursos);
        } catch (error) {
            
            res.status(500).json(error);
        }
    }
    static async pegaConcursosAbertos(req: Request, res: Response){
        try {
            const concursosAbertos:object[] = await concursosServices.pegaRegistrosComCondicao({encerrado:false});
            res.status(200).json(concursosAbertos);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    static async pegaConcursosFechados(req: Request, res: Response){
        try {
            const concursosAbertos:object[] = await concursosServices.pegaRegistrosComCondicao({encerrado:true});
            res.status(200).json(concursosAbertos);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export { ConcursoController };
