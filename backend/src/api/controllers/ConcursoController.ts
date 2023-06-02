import { Request, Response } from 'express';
import database from '../models/index';
import {  ConcursosServices } from '../services';
const concursosServices = new ConcursosServices();
import {NoticiasServices} from '../services';
const noticiasServices= new NoticiasServices();
import {ResultadosServices} from '../services';
const resultadosServices = new ResultadosServices();

class ConcursoController {
    static async pegaTodosOsConcursos(req: Request, res: Response): Promise<void> {
        try {
            const todosOsConcursos: object[] = await resultadosServices.pegaTodosOsRegistros();
            res.status(200).json(todosOsConcursos);
        } catch (error) {
            
            res.status(500).json(error);
        }
    }
}

export { ConcursoController };
