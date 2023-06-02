import { Request, Response } from 'express';
import {ResultadosServices} from '../services';
const resultadosServices = new ResultadosServices();

class ResultadoController {
    static async pegaTodosOsResultados(req: Request, res: Response): Promise<void> {
        try {
            const todosOsConcursos: object[] = await resultadosServices.pegaTodosOsRegistros();
            res.status(200).json(todosOsConcursos);
        } catch (error) {
            
            res.status(500).json(error);
        }
    }
}

export { ResultadoController };