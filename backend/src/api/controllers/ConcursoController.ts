import { Request, Response } from 'express';
import database from '../models/index';


class ConcursoController {
    static async pegaTodosOsConcursos(req: Request, res: Response): Promise<void> {
        try {
            const todosOsConcursos: object[] = await database.Eventos.findAll({
                include: database.Concursos 
            });
            res.status(200).json(todosOsConcursos);
        } catch (error) {
            
            res.status(500).json(error);
        }
    }
}

export { ConcursoController };
