import { Request, Response } from 'express';
import database from '../models';

class ConcursoController {
    static async pegaTodosOsConcursos(req: Request, res: Response): Promise<void> {
        try {
            const todosOsConcursos: object[] = await database.Concursos.findAll();
            res.status(200).json(todosOsConcursos);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export { ConcursoController };
