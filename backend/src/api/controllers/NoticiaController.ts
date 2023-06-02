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
}

export { NoticiasController };